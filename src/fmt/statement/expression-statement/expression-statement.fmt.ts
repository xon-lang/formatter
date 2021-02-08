import { ExpressionStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression-helper';
import { StatementFormatter } from '../statement.fmt';

export class ExpressionStatementFormatter extends StatementFormatter {
  tree: ExpressionStatementTree;

  formattedCode(): string {
    const fmt = getExpressionFormatter(this.tree.value);
    return fmt.formattedCode();
  }
}
