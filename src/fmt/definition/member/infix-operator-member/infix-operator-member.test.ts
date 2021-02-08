import { parseMember } from '@xon/ast';
import { InfixOperatorMemberFormatter } from './infix-operator-member.fmt';

test('infix operator member', () => {
  const code = 'infix   + (  other Integer ) Integer :  \n //';
  const tree = parseMember(code);
  const fmt = new InfixOperatorMemberFormatter(tree);
  expect(fmt.formattedCode()).toBe('infix + (otherInteger) Integer:\n');
});
