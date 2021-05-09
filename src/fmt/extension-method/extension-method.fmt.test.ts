import { formatExtensionMethodCode } from './extension-method.fmt.helper';

test('has generics', () => {
  const code = 'String ?  .join <  T >(  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatExtensionMethodCode(code)).toBe('String?.join<T>(a Char, b Integer) null:\n    1 + 1');
});

test('has not generics', () => {
  const code = 'String ?  .join  (  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatExtensionMethodCode(code)).toBe('String?.join(a Char, b Integer) null:\n    1 + 1');
});
