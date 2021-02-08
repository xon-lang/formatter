import { AddExpressionTree } from '@xon/ast';
import { getExpressionFormatter } from '../expression-helper';
import { ExpressionFormatter } from '../expression.fmt';

export class AddExpressionFormatter extends ExpressionFormatter {
  tree: AddExpressionTree;

  formattedCode(): string {
    const leftFmt = getExpressionFormatter(this.tree.left);
    const rightFmt = getExpressionFormatter(this.tree.right);

    return `${leftFmt.formattedCode()} + ${rightFmt.formattedCode()}`;
  }
}
