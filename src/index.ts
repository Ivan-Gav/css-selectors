import "./normalize.css";
import "./global.css";
import HintWidget from "./widgets/hint/hintwidget";


const hint = new HintWidget;
hint.build();

// ------------------------------------

import Game from "./entities/levels/level";

const l1: Game = {
  header : "Select the pickle on the fancy plate",
  selector : "#fancy pickle",
  syntax: "#id&nbsp;&nbsp;A",
  htmlCode : `
  <bento>
  <orange/>
  </bento>
  <plate id="fancy">
    <pickle/>
  </plate>
  <plate>
    <pickle/>
  </plate>
  `,
  helpTitle: "Descendant Combinator",
  helpSubTitle: "Combine the Descendant & ID Selectors",
  description : 'You can combine any selector with the descendent selector.',
  examples : [
    '<strong>#cool&nbsp;span</strong> selects all <strong>&lt;span&gt;</strong> elements that are inside of elements with <strong>id="cool"</strong>'
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
    console.log(`${tag} is an opening tag!`)  
    const numberedTag = tag.replace('>', ` data-id="${id}">`);
    id++;
    return numberedTag;
    }
    return tag
  });
  console.log(numberedCodeArr);
  if (table) {
    table.innerHTML = '';
    table.innerHTML = numberedCodeArr.join(' \n');
  }
};

// const br = (): HTMLBRElement => document.createElement("br");

const renderViewer = (lvl: Game):void => {
  const viewer = document.querySelector('.viewer-code');
  if (viewer) {
    viewer.innerHTML = '';
    viewer.append(wrapPseudoCode(lvl.htmlCode));
  }
  console.log(viewer);
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
    template += `<div data-tagid="${id}">`;
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

renderTable(l1);
renderViewer(l1);
wrapPseudoCode(l1.htmlCode);