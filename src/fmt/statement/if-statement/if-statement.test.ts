import { parseStatement, IfStatementTree } from '@xon/ast';
import { IfStatementFormatter } from './if-statement.fmt';

test('if statement', () => {
  const code = 'if   x:  \n    2  +2  ';
  const tree = parseStatement<IfStatementTree>(code);
  const fmt = new IfStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('if x:\n    2 + 2');
});
