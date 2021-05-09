import { formatExpressionCode } from '../expression.fmt.helper';

test('has name', () => {
  const code = '[1,    2, 1+1]';
  expect(formatExpressionCode(code)).toBe('[1, 2, 1 + 1]');
});
