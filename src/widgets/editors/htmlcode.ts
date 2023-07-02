import Code from "../../entities/code/code";
import htmlViewerTemplate from "../../entities/templates/html-viewer-template";

import PageElement from "../../shared/page-element";

const htmlCodeParms = {
  element: 'div',
  classList: ['editor', 'htmlcode']
}

export default class HtmlCode extends PageElement {
  constructor() {
    super(htmlCodeParms)
    this.content = htmlViewerTemplate
  }

  public render(currentCode: string): HTMLElement {
    const code = new Code(currentCode);
    this.embedContent([{ templateId: 'htmlCode', content: code.wrapPseudoCode() }])
    return this.build();
  }
}
