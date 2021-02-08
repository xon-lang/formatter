import { AssignmentStatementTree, parseStatement } from '@xon/ast';
import { AssignmentStatementFormatter } from './assignment-statement.fmt';

test('expression statement', () => {
  const code = 'a   =b  ';
  const tree = parseStatement<AssignmentStatementTree>(code);
  const fmt = new AssignmentStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('a = b');
});
