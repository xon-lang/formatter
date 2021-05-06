export class FormatterConfig {
  public nl = '\n';

  public tabWidth = 4;

  public useTab = false;

  public digitsGroupCount: number;

  public breakIfStatement = true;

  public breakLoopStatement = true;

  public maxPropertiesCount = 5;

  public maxMethodsCount = 5;

  public maxOverloadsCount = 5;

  public maxArgumentsCount = 5;

  public digitLetterCaseIsUpper = false;

  public indent(s: string) {
    const tab = this.useTab ? '\t' : ' '.repeat(this.tabWidth);
    return s
      .split('\n')
      .map((x) => x.trim() && tab + x)
      .join('\n');
  }

  public get nl2(): string {
    return this.nl + this.nl;
  }

  constructor(params: Partial<FormatterConfig> = {}) {
    Object.assign(this, params);
  }
}

export const config = new FormatterConfig();
