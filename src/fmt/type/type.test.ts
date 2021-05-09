import { formatTypeCode } from './type.fmt.helper';

test('type with generics', () => {
  const code = 'Type   <  Integer ,   String  >  ';
  expect(formatTypeCode(code)).toBe('Type<Integer, String>');
});

test('type without generics', () => {
  const code = 'Type ';
  expect(formatTypeCode(code)).toBe('Type');
});
