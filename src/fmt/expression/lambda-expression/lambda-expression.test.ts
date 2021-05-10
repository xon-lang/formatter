import { formatExpressionCode } from '../expression.fmt.helper';

test('has parameters', () => {
  const code = '\\a,   b,c: 1+1';
  expect(formatExpressionCode(code)).toBe('\\a, b, c: 1 + 1');
});

test('has no parameters', () => {
  const code = '\\1+1';
  expect(formatExpressionCode(code)).toBe('\\1 + 1');
});
