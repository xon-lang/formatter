import { AddExpressionTree } from '@xon/ast';
import { getExpressionFormatter } from '../expression-helper';
import { ExpressionFormatter } from '../expression.fmt';

export class AddExpressionFormatter extends ExpressionFormatter {
  tree: AddExpressionTree;

  formattedCode(): string {
    const left = getExpressionFormatter(this.tree.left).formattedCode();
    const right = getExpressionFormatter(this.tree.right).formattedCode();

    return `${left} + ${right}`;
  }
}
