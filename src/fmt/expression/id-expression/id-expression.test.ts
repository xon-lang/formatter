import { formatExpressionCode } from '../expression.fmt';

test('has name', () => {
  const code = 'list   ';
  expect(formatExpressionCode(code)).toBe('list');
});
