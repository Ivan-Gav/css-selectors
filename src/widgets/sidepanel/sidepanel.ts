import sidePanelTemplate from "../../entities/templates/side-panel-template";
import PageElement from "../../shared/page-element";
import Game from "../../entities/levels/level";

const sidePanelParms = {
  element: "aside",
};

export default class SidePanel extends PageElement {
  constructor() {
    super(sidePanelParms);
    this.content = sidePanelTemplate;
  }

  public addExamples(lvl: Game): void {
    if (lvl.examples) {
      this.content += `
      <h4 class="examples-title">Examples</h4>
      <div class="examples">
      `;
      lvl.examples.forEach((example) => {
        this.content += `
        <p class="example">${example}</p> \n`;
      });
      this.content += `</div>`;
    }
  }

}
