import { formatStatementCode } from '../statement.fmt.helper';

test('has then body', () => {
  const code = 'if   x:  \n    2  +2  ';
  expect(formatStatementCode(code)).toBe('if x:\n    2 + 2');
});

test('has then and else bodies', () => {
  const code = 'if   x:  \n    2  +2  \nelse:\n    1+1';
  expect(formatStatementCode(code)).toBe('if x:\n    2 + 2\nelse:\n    1 + 1');
});
