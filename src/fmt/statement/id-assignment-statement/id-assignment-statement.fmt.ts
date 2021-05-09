import { IdAssignmentStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';

export class IdAssignmentStatementFormatter extends StatementFormatter {
  tree: IdAssignmentStatementTree;

  formattedCode(): string {
    const { name } = this.tree;
    const value = getExpressionFormatter(this.tree.value).formattedCode();
    return `${name} = ${value}`;
  }
}
