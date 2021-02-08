import { parseStatement, ReturnStatementTree } from '@xon/ast';
import { ReturnStatementFormatter } from './return-statement.fmt';

test('expression statement', () => {
  const code = 'return   77  ';
  const tree = parseStatement<ReturnStatementTree>(code);
  const fmt = new ReturnStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('return 77');
});
