import { formatExpressionCode } from '../expression.fmt.helper';

test('has literal', () => {
  const code = '1+1 or  2*3*5';
  expect(formatExpressionCode(code)).toBe('1 + 1 or 2 * 3 * 5');
});
