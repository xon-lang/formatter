import {
  InitMemberTree,
  MemberTree,
  MethodMemberTree,
  OperatorMemberTree,
  parseMember,
  PropertyMemberTree,
} from '@xon/ast';
import { InitMemberFormatter } from './init-member/init-member.fmt';
import { MemberFormatter } from './member.fmt';
import { MethodMemberFormatter } from './method-member/method-member.fmt';
import { OperatorMemberFormatter } from './operator-member/operator-member.fmt';
import { PropertyMemberFormatter } from './property-member/property-member.fmt';

export function getMemberFormatter(tree: MemberTree): MemberFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof InitMemberTree) return new InitMemberFormatter(tree);
  if (tree instanceof MethodMemberTree) return new MethodMemberFormatter(tree);
  if (tree instanceof OperatorMemberTree) return new OperatorMemberFormatter(tree);
  if (tree instanceof PropertyMemberTree) return new PropertyMemberFormatter(tree);

  throw Error(`Member formatter not found for "${tree.constructor.name}"`);
}

export function formatMemberTree(tree: MemberTree): string {
  return getMemberFormatter(tree).formattedCode();
}

export function formatMemberCode(code: string): string {
  return formatMemberTree(parseMember(code));
}
