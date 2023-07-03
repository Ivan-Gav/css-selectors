import SidePanel from "../widgets/sidepanel/sidepanel";
import Game from "../entities/levels/level";
import levels from "../entities/levels/levels";
import LevelsListPanel from '../widgets/levels-list/levels-list'

const aside = (currentLevel: Game, currentLevelNr: number, completedLevels: Set<number>): HTMLElement => {
  const levelInfo = `Level ${currentLevelNr + 1} of ${levels.length}`;

  const side = new SidePanel();
  side.embedContent([
    { templateId: "sideHeader", content: levelInfo },
    { templateId: "helpTitle", content: currentLevel.helpTitle },
    { templateId: "helpSubTitle", content: currentLevel.helpSubTitle },
    { templateId: "syntax", content: currentLevel.syntax },
    { templateId: "description", content: currentLevel.description },
  ]);
  side.addExamples(currentLevel);
  const output = side.build();

  const levelList = new LevelsListPanel;
  const listPan = levelList.fillList(completedLevels, currentLevelNr)
  console.log(listPan)
  output.append(listPan);

  const burger = output.querySelector(".burger");

  if (burger instanceof HTMLElement) {
    burger.addEventListener("click", (): void => {
      burger.classList.toggle("active");
      document.querySelector(".levels-list-pan")?.classList.toggle("open");
    });
  }

  return output;
};

export default aside;
