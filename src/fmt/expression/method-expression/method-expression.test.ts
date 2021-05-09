import { formatExpressionCode } from '../expression.fmt.helper';

test('has generics', () => {
  const code = 'a.b  .c<Integer  , Map  <String? ,123  >   >  (1  ,2)';
  expect(formatExpressionCode(code)).toBe('a.b.c<Integer, Map<String?, 123>>(1, 2)');
});
