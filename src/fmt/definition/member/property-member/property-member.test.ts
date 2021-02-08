import { parseMember } from '@xon/ast';
import { PropertyMemberFormatter } from './property-member.fmt';

test('property', () => {
  const code = 'a   Integer  ';
  const tree = parseMember(code);
  const fmt = new PropertyMemberFormatter(tree);
  expect(fmt.formattedCode()).toBe('a Integer');
});
