import { LogicalAndExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class LogicalAndExpressionFormatter extends ExpressionFormatter {
  tree: LogicalAndExpressionTree;

  formattedCode(): string {
    const left = formatExpressionTree(this.tree.left);
    const right = formatExpressionTree(this.tree.right);
    return `${left} and ${right}`;
  }
}
