import { formatExtensionMethodCode } from './extension-method.fmt.helper';

test('has name', () => {
  const code = 'String ?  .join <  T >(  a  Char  ,  b  Integer)  null  :\n    1 + 1';
  expect(formatExtensionMethodCode(code)).toBe('String?.join<T>(a Char, b Integer) null:\n    1 + 1');
});
