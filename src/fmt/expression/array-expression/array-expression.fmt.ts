import { ArrayExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  tree: ArrayExpressionTree;

  formattedCode(): string {
    const items = this.tree.items.map((x) => formatExpressionTree(x)).join(', ');
    return `[${items}]`;
  }
}
