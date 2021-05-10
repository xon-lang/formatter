import { formatFunctionCode } from './function.fmt.helper';

test('has generics', () => {
  const code = 'join <  T >(  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatFunctionCode(code)).toBe('join<T>(a Char, b Integer) null:\n    1 + 1');
});

test('has no generics', () => {
  const code = 'join(  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatFunctionCode(code)).toBe('join(a Char, b Integer) null:\n    1 + 1');
});

test('has no body', () => {
  const code = 'join(  a  Char  ,  b  Integer)  null  ';
  expect(formatFunctionCode(code)).toBe('join(a Char, b Integer) null');
});
