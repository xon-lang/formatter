import { parseType } from '@xon/ast';
import { TypeFormatter } from './type.fmt';

test('type with generics', () => {
  const code = 'Type   <  Integer ,   String  >  ';
  const tree = parseType(code);
  const type = new TypeFormatter(tree).formattedCode();
  expect(type).toBe('Type<Integer, String>');
});

test('type without generics', () => {
  const code = 'Type ';
  const tree = parseType(code);
  const type = new TypeFormatter(tree).formattedCode();
  expect(type).toBe('Type');
});
