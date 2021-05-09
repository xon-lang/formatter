import { ParenthesizedExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class ParenthesizedExpressionFormatter extends ExpressionFormatter {
  tree: ParenthesizedExpressionTree;

  formattedCode(): string {
    const value = formatExpressionTree(this.tree.value);
    return `(${value})`;
  }
}
