export default class InputHandler {
  public currentSelector;

  constructor(currentSelector: string) {
    this.currentSelector = currentSelector;
  }

  public handleInputValue(): void {
    const input: HTMLInputElement | null = document.querySelector("#input");
    const enter: HTMLInputElement | null =
      document.querySelector(".enter-button");

    const handler = (): void => {
      let selector = input?.value;
      if (selector) {
        selector = selector.trim();
        this.handleAnswer(this.currentSelector, selector);
      } else {
        this.shakeEditor();
      }
    };
    // input?.addEventListener("change", handler);
    input?.addEventListener("keyup", (e) => {
      if (e.code === "Enter") handler();
    });
    enter?.addEventListener("click", handler);
  }

  public changeInputView(): void {
    const input: HTMLInputElement | null = document.querySelector("#input");
    input?.focus();
    input?.addEventListener("input", () => {
      if (input.value) {
        input.classList.remove("input-strobe");
      } else {
        input.classList.add("input-strobe");
      }
    });
  }

  private shake(element: Element): void {
    let strobe = false;
    if (element.classList.contains("strobe")) {
      element.classList.remove("strobe");
      strobe = true;
    }
    element.classList.remove("shake");
    element.classList.add("shake");
    setTimeout(() => {
      element.classList.remove("shake");
      if (strobe) element.classList.add("strobe");
    }, 500);
  }

  private shakeEditor(): void {
    const editors = document.querySelector(".editors");
    if (editors) this.shake(editors);
  }

  private isCorrect(selector: string, answer: string): boolean {
    if (!/^\D.*/i.test(answer)) {
      return false;
    }
    const table = document.querySelector(".table");
    const selection = table?.querySelectorAll(selector);
    const answers = table?.querySelectorAll(answer);
    if (!answers || !selection || answers.length !== selection.length)
      return false;
    return Array.from(answers).every(
      (node, index) => node === selection[index]
    );
  }

  private handleAnswer(selector: string, answer: string): void {
    const table = document.querySelector(".table");
    if (!answer || !/^\D.*/i.test(answer)) {
      this.shakeEditor();
    } else if (!this.isCorrect(selector, answer)) {
      const answers = table?.querySelectorAll(answer);
      if (answers && answers.length) {
        answers.forEach((element) => this.shake(element));
      } else {
        this.shakeEditor();
      }
    } else {
      const answers = table?.querySelectorAll(answer);
      answers?.forEach((element) => element.classList.add("takeoff"));
      if (answers && answers[0] instanceof HTMLElement) {
        answers[0].onanimationend = (): void => {
          document.dispatchEvent(new CustomEvent("changeLevel", {detail: {win: true}}));
        };
      }
    }
  }
}
