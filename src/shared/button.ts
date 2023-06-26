type ButtonCallback = (e?: Event) => void; 

export default class Button {
  private text: string;
  private className: string;
  private action: ButtonCallback;

  constructor(text: string, className: string, callback: ButtonCallback) {
    this.text = text;
    this.className = className;
    this.action = callback;
  }

  public getButton(): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement("button");
    button.innerText = this.text;
    button.className = this.className;
    button.addEventListener('click', this.action);
    return button;
  }
}
