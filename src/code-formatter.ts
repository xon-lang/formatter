import { parseProgram } from '@xon/ast';
import { ProgramFormatter } from './fmt/program/program.fmt';
import { FormatterConfig } from './formatter-config';

export class CodeFormatter {
  constructor(public code: string, public config: FormatterConfig) {
    FormatterConfig.current = config;
  }

  formattedCode(): string {
    const programTree = parseProgram(this.code);
    const fmt = new ProgramFormatter(programTree);
    return fmt.formattedCode();
  }
}
