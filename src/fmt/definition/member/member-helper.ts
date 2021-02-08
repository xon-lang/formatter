import {
  InfixOperatorMemberTree,
  MemberTree,
  MethodMemberTree,
  PropertyMemberTree,
} from '@xon/ast';
import { InfixOperatorMemberFormatter } from './infix-operator-member/infix-operator-member.fmt';
import { MemberFormatter } from './member.fmt';
import { MethodMemberFormatter } from './method-member/method-member.fmt';
import { PropertyMemberFormatter } from './property-member/property-member.fmt';

export function getMemberFormatter(tree: MemberTree): MemberFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof PropertyMemberTree) return new PropertyMemberFormatter(tree);
  if (tree instanceof MethodMemberTree) return new MethodMemberFormatter(tree);
  if (tree instanceof InfixOperatorMemberTree) return new InfixOperatorMemberFormatter(tree);

  throw Error(`No Statemenet found for ${tree.constructor.name}`);
}

export function getMembersFormatters(members: MemberTree[]): MemberFormatter[] {
  return members.map(getMemberFormatter);
}
