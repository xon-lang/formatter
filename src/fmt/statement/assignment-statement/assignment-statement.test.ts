import { IdAssignmentStatementTree, parseStatement } from '@xon/ast';
import { IdAssignmentStatementFormatter } from './assignment-statement.fmt';

test('expression statement', () => {
  const code = 'a   =b  ';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  const fmt = new IdAssignmentStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('a = b');
});
