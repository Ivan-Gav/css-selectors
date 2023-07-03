
export default class StateController {
  public currentLevel: number;
  public completedLevels: Set<number>;
  private readonly levelsLength: number;

  constructor(levelsLength: number) {
    this.currentLevel = this.checkLevel();
    this.completedLevels = this.checkProgress();
    this.levelsLength = levelsLength;
  }

  private checkLevel(): number {
    const saved = localStorage.getItem('currentLevel');
    return saved ? +saved : 0;
  }

  private checkProgress(): Set<number> {
    const saved = localStorage.getItem('completedLevels')
    if (saved) {
      return JSON.parse(saved)
    }
    return new Set();
  }

  public completeLevel(lvl: number | string):void {
    this.completedLevels.add(+lvl);
  }

  public resetProgress():void {
    this.completedLevels.clear();
    this.currentLevel = 0;
  }

  public isCompleted(lvl: number | string):boolean {
    return this.completedLevels.has(+lvl);
  }

  public next(win: boolean, lvl?: number):void {
      if (win) this.completeLevel(this.currentLevel);
      if (lvl !== undefined) {
        this.currentLevel = lvl;
      } else if (this.currentLevel < this.levelsLength - 1) {
        this.currentLevel += 1
      } else {
        console.log ('win!') //????
      }
  }   
  
  public handleSideNav ():void {
    const check = document.querySelector('.side-header_check');
    const navLeft = document.querySelector('#nav-left');
    const navRight = document.querySelector('#nav-right');
    const progBar = document.querySelector('.progress-bar');

    if (this.completedLevels.has(this.currentLevel)) check?.classList.add('completed');

  if (progBar instanceof HTMLElement) progBar.style.width = `${(this.currentLevel+1) * 100 / this.levelsLength}%`;

    const navLeftClickHandler = ():void => {
      if (this.currentLevel > 0) {
        this.currentLevel -= 2;
        document.dispatchEvent(new CustomEvent("changeLevel", {detail: {win: false}}));
      }  
    }
    
    const navRightClickHandler = ():void => {
      if (this.currentLevel < this.levelsLength - 1) {
        document.dispatchEvent(new CustomEvent("changeLevel", {detail: {win: false}}));
      }  
    }

    navLeft?.addEventListener('click', navLeftClickHandler);
    navRight?.addEventListener('click', navRightClickHandler);
  
  }

}