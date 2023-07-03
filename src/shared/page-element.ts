type Attr = {
  name: string;
  value: string;
}

type Patch = {
  templateId: string;
  content: string | HTMLElement;
};

interface HtmlParams {
  element: string;
  id?: string;
  classList?: string[];
  attr?: Attr
}

export default class PageElement {
  public readonly element: string;
  public readonly id?: string;
  public classList?: string[];
  public attr?: Attr;
  public content?: string;

  constructor(htmlParams: HtmlParams) {
    this.element = htmlParams.element;
    this.id = htmlParams.id;
    this.classList = htmlParams.classList;
    this.attr = htmlParams.attr;
  }

  public build(): HTMLElement {
    const output = document.createElement(this.element);

    if (this.id) output.id = this.id;

    if (this.classList) {
      this.classList.forEach((className) => output.classList.add(className));
    }

    if (this.attr) output.setAttribute(this.attr.name, this.attr.value);

    if (this.content) output.innerHTML = this.content;

    return output;
  }

  public setContent(content?: string): void {
    this.content = content;
  }

  public embedContent(patches: Patch[]): void {
    if (this.content) {
      patches.forEach((patch) => {
        const { templateId: id, content } = patch;
        let insert: string;
        if (typeof content === 'string') {
          insert = content;
          this.content = this.content?.replace(`{ ${id} }`, insert);
        } else if (content instanceof HTMLElement) {
          insert = content.outerHTML
          this.content = this.content?.replace(`{ ${id} }`, insert);
        }

      });
    }
  }
}