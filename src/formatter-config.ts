export class FormatterConfig {
  static current = new FormatterConfig();

  newLine = '\n';

  tabSpaces = '    ';

  get newLine2(): string {
    return this.newLine + this.newLine;
  }
}

export const config = FormatterConfig.current;
