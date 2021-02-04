import { LiteralExpressionTree } from '@xon/ast';
import { getLiteralFormatter } from '../../literal/literal-helper';
import { ExpressionFormatter } from '../expression.fmt';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  constructor(public tree: LiteralExpressionTree) {
    super(tree);
  }

  formattedCode(): string {
    const fmt = getLiteralFormatter(this.tree.literal);
    return fmt.formattedCode();
  }
}
