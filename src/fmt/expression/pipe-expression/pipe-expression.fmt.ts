import { PipeExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class PipeExpressionFormatter extends ExpressionFormatter {
  tree: PipeExpressionTree;

  formattedCode(): string {
    const arg = this.tree.arg;
    const left = formatExpressionTree(this.tree.left);
    const right = formatExpressionTree(this.tree.right);

    if (arg) return `${left} |${arg}: ${right}`;

    return `${left} | ${right}`;
  }
}
