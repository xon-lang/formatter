import { formatExpressionCode } from '../expression.fmt.helper';

test('has literal', () => {
  const code = 'not 1+1  ';
  expect(formatExpressionCode(code)).toBe('not 1 + 1');
});
