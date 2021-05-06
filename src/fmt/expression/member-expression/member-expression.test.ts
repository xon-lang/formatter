import { formatExpressionCode } from '../expression.fmt.helper';

test('has member', () => {
  const code = 'a. b  . c';
  expect(formatExpressionCode(code)).toBe('a.b.c');
});
