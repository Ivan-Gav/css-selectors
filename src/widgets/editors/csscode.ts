import cssEditorTemplate from "../../entities/templates/css-editor-template"
import PageElement from "../../shared/page-element";

const cssCodeParms = {
  element: 'div',
  classList: ['editor', 'csscode']
}

export default class CssCode extends PageElement {
  constructor() {
    super(cssCodeParms)
    this.content = cssEditorTemplate
  }
}