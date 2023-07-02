import Hint from "./hint";
import Button from "../../shared/button";

const hintTitle = `No worries, you've got this!`;

const hintText = `
<p>
You're about to learn CSS Selectors! Selectors are how you pick
which element to apply styles to.
</p>
<h4>Exhibit 1 - A CSS Rule</h4>
<pre>
p {
margin-bottom: 12px;
}
</pre
>
<p>
Here, the "p" is the selector (selects all &lt;p&gt; elements) and
applies the margin-bottom style.
</p>
<p>
To play, type in a CSS selector in the editor below to select the
correct items on the table.If you get it right, you'll advance to
the next level.
</p>
<p>Hover over the items on the table to see their HTML markup.</p>
<p>Get help with selectors on the right! →</p>
`;

export default class HintWidget extends Hint {
  constructor() {
    super(hintTitle, hintText);
  }

  public build(): DocumentFragment {
    const hint = this.getHint();

    const openHintCallback = (e?: Event): void=> {
      if (e && e.target) {
        const target = e.target as HTMLElement;
        target.classList.add("hidden");
        hint.classList.add("showhint");
      }
    };

    const help = new Button(
      `Help, I'm stuck!`,
      "hint-button",
      openHintCallback
    ).getButton();
    // const order = document.querySelector(".order");
    // if (order) {
    //   order.after(help);
    //   help.after(hint);
    // }
    const output = new DocumentFragment;
    output.append(help, hint);
    return output;  
  }
}
