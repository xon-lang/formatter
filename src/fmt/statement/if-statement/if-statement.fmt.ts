import { IfStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { formatExpressionTree } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';
import { formatStatementTree } from '../statement.fmt.helper';

export class IfStatementFormatter extends StatementFormatter {
  tree: IfStatementTree;

  formattedCode(): string {
    const condition = formatExpressionTree(this.tree.condition);
    const thenBody = this.tree.thenBody.map((x) => formatStatementTree(x)).join(config.nl);
    const elseBody = this.tree.elseBody.map((x) => formatStatementTree(x)).join(config.nl);

    if (!elseBody) return `if ${condition}:${config.nl}${config.indent(thenBody)}`;

    return `if ${condition}:${config.nl}${config.indent(thenBody)}${config.nl}else:${
      config.nl
    }${config.indent(elseBody)}`;
  }
}
