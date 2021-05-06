import { formatExpressionCode } from '../expression.fmt.helper';

test('has integer operands', () => {
  const code = '1 +   3   ';
  expect(formatExpressionCode(code)).toBe('1 + 3');
});
