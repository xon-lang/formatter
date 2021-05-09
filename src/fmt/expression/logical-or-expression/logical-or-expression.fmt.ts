import { LogicalOrExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class LogicalOrExpressionFormatter extends ExpressionFormatter {
  tree: LogicalOrExpressionTree;

  formattedCode(): string {
    const left = formatExpressionTree(this.tree.left);
    const right = formatExpressionTree(this.tree.right);
    return `${left} or ${right}`;
  }
}
