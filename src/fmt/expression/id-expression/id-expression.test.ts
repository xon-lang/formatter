import { formatExpressionCode } from '../expression.fmt.helper';

test('has name', () => {
  const code = 'list   ';
  expect(formatExpressionCode(code)).toBe('list');
});
