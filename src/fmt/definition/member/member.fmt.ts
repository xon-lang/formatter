import { MemberTree } from '@xon/ast';
import { BaseFormatter } from '../../base.fmt';

export abstract class MemberFormatter extends BaseFormatter {
  tree: MemberTree;
}
