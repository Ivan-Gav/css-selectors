import "./normalize.css";
import "./global.css";
import HintWidget from "./widgets/hint/hintwidget";


const hint = new HintWidget;
hint.build();

// ------------------------------------

import Game from "./entities/levels/level";

const l1: Game = {
  header : "Select the plates",
  selector : "plate",
  syntax : "A",
  htmlCode:` 
  <plate/>
  <plate/>
  `,
  helpTitle : "Type Selector",
  helpSubTitle : "Select elements by their type",
  description : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.",
  examples : [
    '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
    '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.',
  ]
}

const expandTags = (code: string): string => {
  return code.replace(/<(?<tag>.*)\/>/g, `<$<tag>></$<tag>>`)
}

const renderTable = (lvl: Game):void => {
  const table = document.querySelector('.table');
  const code = expandTags(lvl.htmlCode);
  const codeArr = getTagsArr(code);
  let id = 0;
  const numberedCodeArr = codeArr.map(tag => {
    if (!(/^<\//).test(tag)) {
    const numberedTag = tag.replace('>', ` data-id="${id}">`);
    id++;
    return numberedTag;
    }
    return tag
  });
  if (table) {
    table.innerHTML = '';
    table.innerHTML = numberedCodeArr.join(' \n');
  }
};

const renderViewer = (lvl: Game):void => {
  const viewer = document.querySelector('.viewer-code');
  if (viewer) {
    viewer.innerHTML = '';
    viewer.append(wrapPseudoCode(lvl.htmlCode));
  }
};

const getTagsArr = (code: string): string[] => {
  return code.trim().replace(/>\s*</g, '>.<').split('.');
};

const unTag = (tag: string): string => {
  return tag.replace('<', '&lt;').replace('>', '&gt;');
}

const wrapPseudoCode = (code: string): HTMLDivElement => {
 const nodeArr = getTagsArr(code) //.filter(el => !(/^<\//).test(el))
 const output = document.createElement('div');
 let template = `${unTag('<div class="table">')}<br/>`;
 let indent = '&nbsp;&nbsp;';
 let id = 0;
 nodeArr.forEach((node) => {
  if (!(/^<\//).test(node)) {
    template += `<div data-id="${id}">`;
    id++;
    template += `${indent}${unTag(node)}<br>`;
    indent += '&nbsp;&nbsp;';
    if ((/\/>$/).test(node)) {
      if (indent.length >= 12) indent = indent.slice(12);
      template += '</div>';
    }
  } else { 
    if (indent.length >= 12) indent = indent.slice(12);
    template += `${indent}${unTag(node)}<br>`;
    template += '</div>';
  }
 })
 template += `${unTag('</div>')}`;
 output.innerHTML = template;
 return output;
}

const parseTagName = (element: HTMLElement):string => {
 let elementString =`<`;
 const tag = element.tagName.toLowerCase();
 elementString += tag;
 if (element.id) {
  elementString += ` id="${element.id}"`;
 }
 if ((element.className) && (element.className !== 'strobe')) {
  const classes = element.className.replace('strobe', '').trim() 
  elementString += ` class="${classes}"`;
 }
 if ((element.hasAttribute('for'))) {
  elementString += ` for="${element.getAttribute('for')}"`;
 }
 elementString += `></${tag}>`;
 return elementString;
}

const renderTooltip = (element: HTMLElement):void => {
  
  const text = parseTagName(element);
  const top = element.getBoundingClientRect().y;
  const left = element.getBoundingClientRect().x;
  const width = element.getBoundingClientRect().width;
  
  if(!document.querySelector('.tooltip')) {
    const tooltip: HTMLElement = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = text;
    document.body.append(tooltip);
    tooltip.style.top = (top - 70) + 'px';
    tooltip.style.left = (left + width / 2) + 'px';
  }
}

const hideTooltip = ():void => {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) tooltip.remove();
}

const handleHover = ():void => {
  document.addEventListener('mouseover', (e)=> {
    if ((e.target) && ((e.target as HTMLElement).dataset.id)) {
      const targ = e.target as HTMLElement;
      const id = targ.dataset.id;
      const item = document.querySelector(`.table [data-id="${id}"]`);
      const code = document.querySelector(`.viewer-code [data-id="${id}"]`);
      if (item) renderTooltip(item as HTMLElement);
      item?.classList.add('highlighted');
      code?.classList.add('highlighted');
         
      targ.addEventListener('mouseout', () => {
        hideTooltip();
        item?.classList.remove('highlighted');
        code?.classList.remove('highlighted');
      })
    }
  } )
}

const applyStrobe = (selector: string):void => {
  const elements = document.querySelectorAll(`.table ${selector}`);
  elements?.forEach(element => element.classList.add('strobe'));
}

const changeInputView = ():void => {
  const input: HTMLInputElement | null = document.querySelector("#input");
  input?.addEventListener('input', (() => {
    if (input.value) {
      input.classList.remove('input-strobe');
    } else {
      input.classList.add('input-strobe');
    }
  }))
}

const handleInputValue = (): void => {
  const input: HTMLInputElement | null = document.querySelector("#input");
  const enter: HTMLInputElement | null = document.querySelector(".enter-button");
  
  const handler = (): void => {
    let selector = input?.value;
    if (selector) {
      selector = selector.trim();
      handleAnswer(l1.selector, selector);
    } else {
      shakeEditor();
    }
  };
  input?.addEventListener('change', handler);
  input?.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') handler();
  });
  enter?.addEventListener('click', handler);
};

const shake = (element: Element): void => {
  let strobe = false;
  if (element.classList.contains('strobe')) {
    element.classList.remove('strobe');
    strobe = true;
  }
  element.classList.remove('shake');
  element.classList.add('shake');
  setTimeout(() => {
    element.classList.remove('shake')
    if (strobe) element.classList.add('strobe');
  }, 500);
}

const shakeEditor = (): void => {
  const editors = document.querySelector('.editors');
  if (editors) shake(editors);
}

const isCorrect = (selector: string, answer: string): boolean => {
  const table = document.querySelector('.table');
  const selection = table?.querySelectorAll(selector);
  const answers = table?.querySelectorAll(answer);
  if (!answers || !selection 
    || (answers.length !== selection.length)) return false;
  return Array.from(answers).every((node, index) => node === selection[index]);
}

const handleAnswer = (selector: string, answer: string): void => {
  console.log(isCorrect(selector, answer))
  if (!isCorrect(selector, answer)) {
    const table = document.querySelector('.table');
    const answers = table?.querySelectorAll(answer);
    console.log(answers)
    if (answers && answers.length) {
      answers.forEach(element => shake(element));
    } else {
      console.log(`you've selected nothing, dude!`)
      shakeEditor();
    }
  } else {
    console.log('Right!!!')
  }
}

renderTable(l1);
renderViewer(l1);
wrapPseudoCode(l1.htmlCode);
handleHover()
applyStrobe(l1.selector);
changeInputView();
handleInputValue()

