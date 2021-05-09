import { ProgramTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatDefinitionTree } from '../definition/definition.fmt.helper';
import { formatStatementTree } from '../statement/statement.fmt.helper';

export class ProgramFormatter extends BaseFormatter {
  tree: ProgramTree;

  formattedCode(): string {
    const statements = this.tree.statements.map((x) => formatStatementTree(x)).join(config.nl);
    const definitions = this.tree.definitions.map((x) => formatDefinitionTree(x)).join(config.nl);

    return [statements, definitions].filter((x) => x).join(config.nl2);
  }
}
