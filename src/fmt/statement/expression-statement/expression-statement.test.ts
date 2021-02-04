import { ExpressionStatementTree, parseStatement } from '@xon/ast';
import { ExpressionStatementFormatter } from './expression-statement.fmt';

test('expression statement', () => {
  const code = '1  + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  const fmt = new ExpressionStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('1 + 1');
});
