export class FormatterConfig {
  newLine = '\n';

  tabWidth = 4;

  useTab = false;

  digitsGroupCount: number;

  breakIfStatement = true;

  breakLoopStatement = true;

  maxPropertiesCount = 5;

  maxMethodsCount = 5;

  maxOverloadsCount = 5;

  maxArgumentsCount = 5;

  constructor(params: Partial<FormatterConfig> = {}) {
    Object.assign(this, params);
  }

  emptyLine(count = 1): string {
    return this.newLine.repeat(count + 1);
  }

  tab(): string {
    return this.useTab ? '\t' : ' '.repeat(this.tabWidth);
  }

  newLineTab(): string {
    return this.newLine + this.tab();
  }
}

export const config = new FormatterConfig();
