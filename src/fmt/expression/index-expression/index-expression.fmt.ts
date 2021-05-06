import { IndexExpressionTree } from '@xon/ast';
import { ExpressionFormatter, formatExpressionTree } from '../expression.fmt';

export class IndexExpressionFormatter extends ExpressionFormatter {
  tree: IndexExpressionTree;

  formattedCode(): string {
    const instance = formatExpressionTree(this.tree.instance);
    const index = formatExpressionTree(this.tree.index);
    return `${instance}[${index}]`;
  }
}
