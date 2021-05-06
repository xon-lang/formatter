import { LiteralExpressionTree } from '@xon/ast';
import { formatLiteralTree } from '../../literal/literal.fmt.helper';
import { ExpressionFormatter } from '../expression.fmt';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  tree: LiteralExpressionTree;

  formattedCode(): string {
    return formatLiteralTree(this.tree.literal);
  }
}
