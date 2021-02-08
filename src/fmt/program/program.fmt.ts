import { ProgramTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { DefinitionFormatter } from '../definition/definition.fmt';
import { LibraryFormatter } from '../library/library.fmt';
import { getStatementFormatter } from '../statement/statement-helper';

export class ProgramFormatter extends BaseFormatter {
  tree: ProgramTree;

  formattedCode(): string {
    const libraries = this.tree.libraries.map((x) => new LibraryFormatter(x).formattedCode());
    const statements = this.tree.statements.map((x) => getStatementFormatter(x).formattedCode());
    const definitions = this.tree.definitions.map((x) =>
      new DefinitionFormatter(x).formattedCode()
    );

    const members = [libraries, statements, definitions]
      .map((x) => x.join(config.newLine))
      .filter((x) => x)
      .join(config.newLine2);

    return members;
  }
}
