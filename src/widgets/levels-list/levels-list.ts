/* eslint-disable max-lines-per-function */
import levelsListTemplate from "../../entities/templates/levels-list-template";
import PageElement from "../../shared/page-element";
import levels from "../../entities/levels/levels";
import Button from "../../shared/button";

const levelsListParms = {
  element: "div",
  classList: ["levels-list-pan"],
};

export default class LevelsListPanel extends PageElement {
  constructor() {
    super(levelsListParms);
    this.content = levelsListTemplate;
  }

  public fillList(
    completedLevels: Set<number>,
    currentLevel: number
  ): HTMLElement {
    
    const listItemClickHandler = (e: Event): void => {
      const burger = document.querySelector(".burger");
      const list = document.querySelector(".open");
      const targ = e.currentTarget;
      if (burger instanceof HTMLElement) {
        burger.dispatchEvent(new Event("click"));
        if (list instanceof HTMLElement) {
          list.ontransitionend = (): void => {
            if (
              targ instanceof HTMLElement &&
              "dataset" in targ &&
              "nr" in targ.dataset
            ) {
              const nr = Number(targ.dataset.nr);
              document.dispatchEvent(
                new CustomEvent("changeLevel", {
                  detail: { win: false, lvl: nr },
                })
              );
            }
          };
        }
      }
    };

    const resetProgressHandler = (): void => {
      const burger = document.querySelector(".burger");
      const list = document.querySelector(".open");
      if (burger instanceof HTMLElement) {
        burger.dispatchEvent(new Event("click"));
        if (list instanceof HTMLElement) {
          list.ontransitionend = (): void => {
            document.dispatchEvent(new CustomEvent("resetProgress"));
            document.dispatchEvent(
              new CustomEvent("changeLevel", {
                detail: { win: false, lvl: 0 },
              })
            );
          };
        }
      }
    };
    
    const levelsList = document.createElement("div");
    levelsList.className = "levels-list";
    levels.forEach((level, i) => {
      const item = document.createElement("div");
      item.setAttribute("data-nr", `${i}`);
      if (i == currentLevel) item.classList.add("current");
      if (completedLevels.has(i)) {
        item.innerHTML +=
          '<span class="checkmark completed"><i class="fa-solid fa-check"></i></span>';
      } else {
        item.innerHTML +=
          '<span class="checkmark"><i class="fa-solid fa-check"></i></span>';
      }

      item.innerHTML += `<span class="level-number">${i + 1}</span>`;
      item.innerHTML += `${level.syntax}`;

      item.addEventListener("click", listItemClickHandler);
      levelsList.append(item);
    });

    const reset = new Button(
      "ResetProgress",
      "reset-button",
      resetProgressHandler
    );
    const resetButton = reset.getButton();

    const levelsListPan = this.build();
    levelsListPan.append(levelsList, resetButton);

    return levelsListPan;
  }
}
