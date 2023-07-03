import "./normalize.css";
import "./global.css";
import "./shared/burger.css";

import levels from "./entities/levels/levels";
import StateController from "./features/state-controller";

import mainPage from "./pages/main-page";
import HoverHandler from "./features/handle-hover";
import InputHandler from "./features/handle-input";
import aside from "./pages/aside";

const lvlCntrl = new StateController(levels.length);
 

const render = ():void =>
{
const currentLevel = lvlCntrl.currentLevel;

const header = document.querySelector("header");
header?.after(mainPage(levels[currentLevel]), aside(levels[currentLevel], currentLevel, lvlCntrl.completedLevels));

const tableHoverHandler = new HoverHandler(document);
tableHoverHandler.handleHover();

const inputHandler = new InputHandler(levels[currentLevel].selector);
inputHandler.changeInputView();
inputHandler.handleInputValue();
lvlCntrl.handleSideNav()

const handler = (e:Event):void => {
  document.querySelector('main')?.remove();
  document.querySelector('aside')?.remove();
  document.removeEventListener('changeLevel', handler);
  if (e instanceof CustomEvent) {
    lvlCntrl.next(e.detail.win, e.detail.lvl);
  }
  render();
}
document.addEventListener('resetProgress', () => lvlCntrl.resetProgress());
document.addEventListener('changeLevel', handler);
}

render()
