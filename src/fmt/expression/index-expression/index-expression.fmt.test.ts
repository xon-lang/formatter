import { formatExpressionCode } from '../expression.fmt.helper';

test('has member instance', () => {
  const code = 'a.b [  c +  d   ]';
  expect(formatExpressionCode(code)).toBe('a.b[c + d]');
});
