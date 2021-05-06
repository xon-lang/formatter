import { formatExpressionCode } from '../expression.fmt.helper';

test('has generics', () => {
  const code = 'Animal<  Drinker >  ( 1  ,  true)  ';
  expect(formatExpressionCode(code)).toBe('Animal<Drinker>(1, true)');
});
