import { NegativeExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class NegativeExpressionFormatter extends ExpressionFormatter {
  tree: NegativeExpressionTree;

  formattedCode(): string {
    const value = formatExpressionTree(this.tree.value);
    return `-${value}`;
  }
}
