import { formatMemberCode } from '../member.fmt.helper';

test('one statement', () => {
  const code = 'add  ( a Float   , b   Integer   )   Float :  \n    return   a   +  b';
  expect(formatMemberCode(code)).toBe('add (a Float, b Integer) Float:\n    return a + b');
});

test('several statements', () => {
  const code =
    'add  ( a Float   , b   Integer   )   Float :  \n    n   =  a+  b\n    return   a   +  b';
  expect(formatMemberCode(code)).toBe(
    'add (a Float, b Integer) Float:\n    n = a + b\n    return a + b'
  );
});
