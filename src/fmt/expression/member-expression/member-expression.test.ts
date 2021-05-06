import { formatExpressionCode } from '../expression.fmt';

test('has member', () => {
  const code = 'a. b  . c';
  expect(formatExpressionCode(code)).toBe('a.b.c');
});
