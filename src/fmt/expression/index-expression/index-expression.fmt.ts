import { IndexExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class IndexExpressionFormatter extends ExpressionFormatter {
  tree: IndexExpressionTree;

  formattedCode(): string {
    const instance = formatExpressionTree(this.tree.instance);
    const index = formatExpressionTree(this.tree.index);
    return `${instance}[${index}]`;
  }
}
