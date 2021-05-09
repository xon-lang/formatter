import { formatFunctionCode } from './function.fmt.helper';

test('has name', () => {
  const code = 'join <  T >(  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatFunctionCode(code)).toBe('join<T>(a Char, b Integer) null:\n    1 + 1');
});
