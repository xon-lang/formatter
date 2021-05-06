import { OperatorExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class OperatorExpressionFormatter extends ExpressionFormatter {
  tree: OperatorExpressionTree;

  formattedCode(): string {
    const operator = this.tree.operator;
    const left = formatExpressionTree(this.tree.left);
    const right = formatExpressionTree(this.tree.right);
    return `${left} ${operator} ${right}`;
  }
}
