import { ProgramTree } from '@xon/ast';
import { FormatterConfig } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { LibraryFormatter } from '../library/library.fmt';
import { getStatementsFormatters } from '../statement/statement-helper';

export class ProgramFormatter extends BaseFormatter {
  tree: ProgramTree;

  formattedCode(): string {
    const importsFmts = this.tree.libraries.map((x) => new LibraryFormatter(x));
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
