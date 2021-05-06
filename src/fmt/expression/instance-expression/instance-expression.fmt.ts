import { InstanceExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';

export class InstanceExpressionFormatter extends ExpressionFormatter {
  tree: InstanceExpressionTree;

  formattedCode(): string {
    return this.tree.name;
  }
}
