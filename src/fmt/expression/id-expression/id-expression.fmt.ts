import { IdExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';

export class IdExpressionFormatter extends ExpressionFormatter {
  tree: IdExpressionTree;

  formattedCode(): string {
    return this.tree.name;
  }
}
