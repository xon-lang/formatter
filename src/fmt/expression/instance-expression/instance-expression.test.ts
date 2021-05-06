import { formatExpressionCode } from '../expression.fmt';

test('has this keyword', () => {
  const code = 'this   ';
  expect(formatExpressionCode(code)).toBe('this');
});
