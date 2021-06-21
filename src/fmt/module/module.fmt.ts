import { ModuleTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatDefinitionTree } from '../definition/definition.fmt.helper';
import { formatFunctionTree } from '../function/function.fmt.helper';
import { formatStatementTree } from '../statement/statement.fmt.helper';

export class ModuleFormatter extends BaseFormatter {
  tree: ModuleTree;

  formattedCode(): string {
    const statements = this.tree.statements.map((x) => formatStatementTree(x)).join(config.nl);
    const functions = this.tree.functions.map((x) => formatFunctionTree(x)).join(config.nl2);
    const definitions = this.tree.definitions.map((x) => formatDefinitionTree(x)).join(config.nl2);

    return [statements, functions, definitions].filter((x) => x).join(config.nl2);
  }
}
