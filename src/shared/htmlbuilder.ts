
type Patch = {
  templateId: string;
  content: string;
};

class HtmlBuilder {
  public readonly template;
  public readonly patches
  constructor(template: string, patches: Patch[]) {
    this.template = template;
    this.patches = patches;
  }

  protected build(): string {
    let output: string = this.template; 
    this.patches.forEach((patch) => {
      const { templateId: id, content } = patch;
      output = output.replace(`{ ${id} }`, content);
    })
    return output;
  }
  
  public embed(host: HTMLElement): void {
    host.append(this.build());
  }
}

export default HtmlBuilder;