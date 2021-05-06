import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression.fmt';
import { StatementFormatter } from '../statement.fmt';

export class AssignmentStatementFormatter extends StatementFormatter {
  tree: AssignmentStatementTree;

  formattedCode(): string {
    const { name } = this.tree;
    const value = getExpressionFormatter(this.tree.value).formattedCode();
    return `${name} = ${value}`;
  }
}
