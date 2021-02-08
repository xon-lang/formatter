import { LiteralExpressionTree } from '@xon/ast';
import { getLiteralFormatter } from '../../literal/literal-helper';
import { ExpressionFormatter } from '../expression.fmt';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  tree: LiteralExpressionTree;

  formattedCode(): string {
    const fmt = getLiteralFormatter(this.tree.literal);
    return fmt.formattedCode();
  }
}
