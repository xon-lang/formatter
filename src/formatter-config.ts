export class FormatterConfig {
  newLine = '\n';

  tabWidth = 4;

  useTab = false;

  digitsGroupCount = 0;

  constructor(params: Partial<FormatterConfig> = {}) {
    Object.assign(this, params);
  }

  emptyLine(count = 1): string {
    return this.newLine.repeat(count + 1);
  }

  tabSpaces(): string {
    return ' '.repeat(this.tabWidth);
  }
}

export const config = new FormatterConfig();
