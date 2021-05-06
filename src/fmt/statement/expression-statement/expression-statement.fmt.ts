import { ExpressionStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression.fmt';
import { StatementFormatter } from '../statement.fmt';

export class ExpressionStatementFormatter extends StatementFormatter {
  tree: ExpressionStatementTree;

  formattedCode(): string {
    const value = getExpressionFormatter(this.tree.value).formattedCode();
    return value;
  }
}
