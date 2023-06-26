import Button from '../../shared/button';
import './hint.css'

const gotItCallback = (e?: Event): void => {
  if (e && e.target) {
    const target = e.target as HTMLElement;
    (target.parentElement as HTMLElement).classList.remove('showhint');
  }
}

export default class Hint {
  private title: string;
  private text: string;
  constructor(hintTitle: string, hintText: string) {
    this.title = hintTitle;
    this.text = hintText;
  }

  public getHint(): HTMLElement {
    const result: HTMLElement = document.createElement('article');
    const h3: HTMLHeadingElement = document.createElement('h3');
    h3.innerText = this.title;
    h3.className = 'hint-header';
    result.innerHTML = this.text
    result.prepend(h3);
    result.className = 'hint';
    const gotIt = (new Button('Ok, got it!', 'hint-button', gotItCallback)).getButton();
    result.append(gotIt);
    return result;
  }
}
