import { MemberAssignmentStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';

export class MemberAssignmentStatementFormatter extends StatementFormatter {
  tree: MemberAssignmentStatementTree;

  formattedCode(): string {
    const { name } = this.tree;
    const value = getExpressionFormatter(this.tree.value).formattedCode();
    return `this.${name} = ${value}`;
  }
}
