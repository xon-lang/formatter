import { formatExpressionCode } from '../expression.fmt.helper';

test('has expression', () => {
  const code = '( 1   +2^3) ';
  expect(formatExpressionCode(code)).toBe('(1 + 2 ^ 3)');
});
