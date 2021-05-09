import { formatExpressionCode } from '../expression.fmt.helper';

test('has name', () => {
  const code = '-  123   ';
  expect(formatExpressionCode(code)).toBe('-123');
});
