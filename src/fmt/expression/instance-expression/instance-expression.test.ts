import { formatExpressionCode } from '../expression.fmt.helper';

test('has this keyword', () => {
  const code = 'this   ';
  expect(formatExpressionCode(code)).toBe('this');
});
