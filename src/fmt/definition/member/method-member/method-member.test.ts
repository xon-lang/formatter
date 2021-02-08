import { parseMember } from '@xon/ast';
import { MethodMemberFormatter } from './method-member.fmt';

test('one statement', () => {
  const code = 'add  ( a Float   , b   Integer   )   Float :  \n    return   a   +  b';
  const tree = parseMember(code);
  const fmt = new MethodMemberFormatter(tree);
  expect(fmt.formattedCode()).toBe('add (a Float, b Integer) Float:\n    return a + b');
});

test('several statements', () => {
  const code =
    'add  ( a Float   , b   Integer   )   Float :  \n    n   =  a+  b\n    return   a   +  b';
  const tree = parseMember(code);
  const fmt = new MethodMemberFormatter(tree);
  expect(fmt.formattedCode()).toBe('add (a Float, b Integer) Float:\n    n = a + b\n    return a + b');
});
