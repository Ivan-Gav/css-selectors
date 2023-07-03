import levelsListTemplate from "../../entities/templates/levels-list-template";
import PageElement from "../../shared/page-element";
import levels from "../../entities/levels/levels";

const levelsListParms = {
  element: "div",
  classList: ['levels-list-pan']
};

export default class LevelsListPanel extends PageElement {
  constructor() {
    super(levelsListParms);
    this.content = levelsListTemplate;
  }
 
  
  public fillList(completedLevels: Set<number>, currentLevel: number): HTMLElement {
    
    const levelsList = document.createElement('div');
    levelsList.className = 'levels-list';
    levels.forEach((level, i) => {
      const item = document.createElement("div");
      if (i == currentLevel) item.classList.add('current');
      if (completedLevels.has(i)) {
        item.innerHTML += '<span class="checkmark completed"><i class="fa-solid fa-check"></i></span>';
      } else {
        item.innerHTML += '<span class="checkmark"><i class="fa-solid fa-check"></i></span>';
      }
      
      item.innerHTML += `<span class="level-number">${i + 1}</span>`;
      item.innerHTML += `${level.syntax}`
      // item.addEventListener('click', listItemClickHandler);

      levelsList.append(item);
      })

      const levelsListPan = this.build();
      levelsListPan.append(levelsList);

      return levelsListPan;
    }


}
  

