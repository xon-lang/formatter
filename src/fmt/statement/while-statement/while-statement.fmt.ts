import { WhileStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { formatExpressionTree } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';
import { formatStatementTree } from '../statement.fmt.helper';

export class WhileStatementFormatter extends StatementFormatter {
  tree: WhileStatementTree;

  formattedCode(): string {
    const expression = formatExpressionTree(this.tree.expression);
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `while ${expression}:${config.nl}${config.indent(body)}`;
  }
}
