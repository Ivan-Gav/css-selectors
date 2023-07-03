import PageElement from "../shared/page-element";
import CssCode from "../widgets/editors/csscode";
import HtmlCode from "../widgets/editors/htmlcode";
import GameSection from "../widgets/game/game";
import Table from "../widgets/game/table";
import HintWidget from "../widgets/hint/hintwidget";
import Game from "../entities/levels/level";

const mainPage = (currentLevel: Game) : HTMLElement => {
// Заголовок
const order = new PageElement({element: 'h2', classList: ['order']})
order.setContent(currentLevel.header);
const gameHeader = order.build();

// Подсказка
  const hint = (new HintWidget).build();

// Секция со столом
const table = (new Table).renderTable(currentLevel.htmlCode, currentLevel.selector);
const game = new GameSection;
game.embedContent([{ templateId: 'table', content: table  }])
const gameSection = game.build();
// gameSection.prepend(table);

// Секция с кодом
const editors = (new PageElement({element: 'section', classList: ['editors']})).build();
const cssCode = (new CssCode).build();
const htmlCode =(new HtmlCode).render(currentLevel.htmlCode);
editors.append(cssCode, htmlCode);

// Блок main
const main = (new PageElement({element: 'main'})).build();
main.append(gameHeader, hint, gameSection, editors);

return main;
}
export default mainPage;