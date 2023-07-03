
import SidePanel from "../widgets/sidepanel/sidepanel";
import Game from "../entities/levels/level";
import levels from "../entities/levels/levels";

const aside = (currentLevel: Game, currentLevelNr: number) : HTMLElement => {

  const levelInfo = `Level ${currentLevelNr + 1} of ${levels.length}`;

  const side = new SidePanel;
  side.embedContent([
    { templateId: 'sideHeader', content: levelInfo  },
    { templateId: 'helpTitle', content: currentLevel.helpTitle },
    { templateId: 'helpSubTitle', content: currentLevel.helpSubTitle },
    { templateId: 'syntax', content: currentLevel.syntax },
    { templateId: 'description', content: currentLevel.description },
  ]);
  side.addExamples(currentLevel);

  return side.build();
  }
  
  export default aside;