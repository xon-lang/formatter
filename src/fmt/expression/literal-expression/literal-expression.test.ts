import { formatExpressionCode } from '../expression.fmt';

test('literal expression', () => {
  const code = '1  ';
  expect(formatExpressionCode(code)).toBe('1');
});
