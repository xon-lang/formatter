import { LambdaExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class LambdaExpressionFormatter extends ExpressionFormatter {
  tree: LambdaExpressionTree;

  formattedCode(): string {
    const parameters = this.tree.parameters.join(', ');
    const body = formatExpressionTree(this.tree.body);

    if (parameters) return `\\${parameters}: ${body}`;
    return `\\${body}`;
  }
}
