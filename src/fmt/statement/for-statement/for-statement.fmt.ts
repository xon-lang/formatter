import { ForStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { formatExpressionTree } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';
import { formatStatementTree } from '../statement.fmt.helper';

export class ForStatementFormatter extends StatementFormatter {
  tree: ForStatementTree;

  formattedCode(): string {
    const value = this.tree.valueVarName;
    const index = this.tree.indexVarName ? ', ' + this.tree.indexVarName : '';
    const expression = formatExpressionTree(this.tree.expression);
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `for ${value}${index} in ${expression}:${config.nl}${config.indent(body)}`;
  }
}
