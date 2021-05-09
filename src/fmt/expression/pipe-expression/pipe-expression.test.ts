import { formatExpressionCode } from '../expression.fmt.helper';

test('has several pipes', () => {
  const code = '123  | x : 5 |x +   7  ';
  expect(formatExpressionCode(code)).toBe('123 |x: 5 | x + 7');
});
