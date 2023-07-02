import PageElement from "../../shared/page-element";
import Code from "../../entities/code/code";
import HoverHandler from "../../features/handle-hover";

const tableParms = {
  element: 'div',
  classList: ['table'],
};

export default class Table extends PageElement {
  constructor() {
    super(tableParms);
  }

  public renderTable(codeString: string, selector: string): HTMLElement {
    const dishes = new Code(codeString).dishUp();
    this.setContent(dishes);
    const table = this.build();
    const elements = table.querySelectorAll(`${selector}`);
    elements?.forEach((element) => element.classList.add("strobe"));
    const hoverHandler = new HoverHandler(table);
    hoverHandler.handleHover();
    return table;
  }
}
