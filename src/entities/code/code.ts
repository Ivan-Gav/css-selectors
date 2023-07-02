

export default class Code {

  public codeString;

  constructor (codeString: string) {
    this.codeString = codeString;
  }

  // модифицирует HTML-код для стола
  public dishUp ():string {
    const code = this.expandTags();
    const codeArr = this.getTagsArr(code);
    let id = 0;
    const numberedCodeArr = codeArr.map(tag => {
      if (!(/^<\//).test(tag)) { 
      // если тэг не закрывающий, присваиваем ему data-id
      const numberedTag = tag.replace('>', ` data-id="${id}">`);
      id++;
      return numberedTag;
      }
      return tag
    });
      return numberedCodeArr.join(' \n');
  }

  // модифицирует HTML-код для отображения в окне редактора
  public wrapPseudoCode (): string {
    const nodeArr = this.getTagsArr(this.codeString)
    let template = `${this.unTag('<div class="table">')}<br/>`;
    let indent = '&nbsp;&nbsp;';
    let id = 0;
    nodeArr.forEach((node) => {
     if (!(/^<\//).test(node)) {
       template += `<div data-id="${id}">`;
       id++;
       template += `${indent}${this.unTag(node)}<br>`;
       indent += '&nbsp;&nbsp;';
       if ((/\/>$/).test(node)) {
         if (indent.length >= 12) indent = indent.slice(12);
         template += '</div>';
       }
     } else { 
       if (indent.length >= 12) indent = indent.slice(12);
       template += `${indent}${this.unTag(node)}<br>`;
       template += '</div>';
     }
    })
    template += `${this.unTag('</div>')}`;
    return template;
   }

  // преобразует одиночные (псевдо)тэги в парные
  // например <plate/> => <plate></plate>
  private expandTags (): string {
    return this.codeString.replace(/<(?<tag>.*)\/>/g, `<$<tag>></$<tag>>`);
  }

  // преобразует строку с HTML-кодом в массив тэгов
  private getTagsArr (codeString: string): string[] {
    return codeString.trim().replace(/>\s*</g, '>.<').split('.');
  }

  // преобразует тэг в текст для отображения кода на сайте
  private unTag (tag: string): string {
    return tag.replace('<', '&lt;').replace('>', '&gt;');
  }
}