import { ExpressionStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression-helper';
import { StatementFormatter } from '../statement.fmt';

export class ExpressionStatementFormatter extends StatementFormatter {
  constructor(public tree: ExpressionStatementTree) {
    super(tree);
  }

  formattedCode(): string {
    const fmt = getExpressionFormatter(this.tree.value);
    return fmt.formattedCode();
  }
}
