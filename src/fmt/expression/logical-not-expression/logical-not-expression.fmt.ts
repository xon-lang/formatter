import { LogicalNotExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class LogicalNotExpressionFormatter extends ExpressionFormatter {
  tree: LogicalNotExpressionTree;

  formattedCode(): string {
    const value = formatExpressionTree(this.tree.value);
    return `not ${value}`;
  }
}
