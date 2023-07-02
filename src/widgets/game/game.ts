import gameSectionTemplate from "../../entities/templates/game-section-template"
import PageElement from "../../shared/page-element";


const gameSectionParms = {
  element: 'section',
  classList: ['game']
}

export default class GameSection extends PageElement {
  constructor() {
    super(gameSectionParms)
    this.content = gameSectionTemplate;
  }
}