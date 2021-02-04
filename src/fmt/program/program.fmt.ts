import { ProgramTree } from '@xon/ast';
import { FormatterConfig } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { ImportsFormatter } from '../imports/imports.fmt';
import { getStatementsFormatters } from '../statement/statement-helper';

export class ProgramFormatter extends BaseFormatter {
  constructor(public tree: ProgramTree) {
    super(tree);
  }

  formattedCode(): string {
    const importsFmts = this.tree.imports.map((x) => new ImportsFormatter(x));
    const statementsFmts = getStatementsFormatters(this.tree.statements);

    const importsCode = `${importsFmts
      .map((x) => x.formattedCode())
      .join(FormatterConfig.current.newLine)}`;
    const statmentsCode = `${statementsFmts
      .map((x) => x.formattedCode())
      .join(FormatterConfig.current.newLine)}`;

    return importsCode + FormatterConfig.current.newLine + statmentsCode;
  }
}
