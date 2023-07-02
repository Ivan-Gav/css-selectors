export default class HoverHandler {
  public observedElement;

  constructor(observedElement: HTMLElement | Document) {
    this.observedElement = observedElement;
  }

  public handleHover(): void {
    this.observedElement.addEventListener("mouseover", (e) => {
      const targ = e.target;
      if (targ instanceof HTMLElement && targ.dataset.id) {
        const id = targ.dataset.id;
        const item = document.querySelector(`.table [data-id="${id}"]`);
        const code = document.querySelector(`.viewer-code [data-id="${id}"]`);
        if (item instanceof HTMLElement) this.renderTooltip(item);
        item?.classList.add("highlighted");
        code?.classList.add("highlighted");

        targ.addEventListener("mouseout", () => {
          this.hideTooltip();
          item?.classList.remove("highlighted");
          code?.classList.remove("highlighted");
        });
      }
    });
  }

  private renderTooltip(element: HTMLElement): void {
    const text = this.parseTagName(element);
    const top = element.getBoundingClientRect().y;
    const left = element.getBoundingClientRect().x;
    const width = element.getBoundingClientRect().width;

    if (!document.querySelector(".tooltip")) {
      const tooltip: HTMLElement = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = text;
      document.body.append(tooltip);
      tooltip.style.top = top - 70 + "px";
      tooltip.style.left = left + width / 2 + "px";
    }
  }

  private hideTooltip(): void {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  }

  // делает для HTML-элемента строку для всплывающей подсказки
  private parseTagName(element: HTMLElement): string {
    let elementString = `<`;
    const tag = element.tagName.toLowerCase();
    elementString += tag;
    if (element.id) {
      elementString += ` id="${element.id}"`;
    }
    if (element.className && element.className !== "strobe") {
      const classes = element.className.replace("strobe", "").trim();
      elementString += ` class="${classes}"`;
    }
    if (element.hasAttribute("for")) {
      elementString += ` for="${element.getAttribute("for")}"`;
    }
    elementString += `></${tag}>`;
    return elementString;
  }
}
