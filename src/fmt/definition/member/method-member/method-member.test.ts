import { formatMemberCode } from '../member.fmt.helper';

test('has one statement', () => {
  const code = 'add  ( a Float   , b   Integer   )   Float :  \n    return   a   +  b';
  expect(formatMemberCode(code)).toBe('add(a Float, b Integer) Float:\n    return a + b');
});

test('has several statements', () => {
  const code =
    'add  ( a Float   , b   Integer   )   Float :  \n    n   =  a+  b\n    return   a   +  b';
  expect(formatMemberCode(code)).toBe(
    'add(a Float, b Integer) Float:\n    n = a + b\n    return a + b'
  );
});

test('has no body', () => {
  const code =
    'add   ( a Float   , b   Integer   )   Float ';
  expect(formatMemberCode(code)).toBe(
    'add(a Float, b Integer) Float'
  );
});
