import { MemberAssignmentStatementTree, parseStatement } from '@xon/ast';
import { MemberAssignmentStatementFormatter } from './member-assignment-statement.fmt';

test('expression statement', () => {
  const code = 'this  . a   =b  ';
  const tree = parseStatement<MemberAssignmentStatementTree>(code);
  const fmt = new MemberAssignmentStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('this.a = b');
});
