import { ProgramTree } from '@xon/ast';
import { FormatterConfig } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { DefinitionFormatter } from '../definition/definition.fmt';
import { LibraryFormatter } from '../library/library.fmt';
import { getStatementFormatter } from '../statement/statement-helper';

export class ProgramFormatter extends BaseFormatter {
  tree: ProgramTree;

  formattedCode(): string {
    const libraries = this.tree.libraries
      .map((x) => new LibraryFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);
    const statements = this.tree.statements
      .map((x) => getStatementFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);
    const definitions = this.tree.definitions
      .map((x) => new DefinitionFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);

    return (
      `${libraries}` +
      `${statements ? FormatterConfig.current.newLine : ''}${statements}` +
      `${definitions ? FormatterConfig.current.newLine : ''}${definitions}`
    ).trim();
  }
}
