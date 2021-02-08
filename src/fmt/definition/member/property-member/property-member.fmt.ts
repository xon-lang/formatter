import { PropertyMemberTree } from '@xon/ast';
import { TypeFormatter } from '../../../type/type.fmt';
import { MemberFormatter } from '../member.fmt';

export class PropertyMemberFormatter extends MemberFormatter {
  tree: PropertyMemberTree;

  formattedCode(): string {
    const name = this.tree.name.trim();

    const type = new TypeFormatter(this.tree.type).formattedCode();

    return `${name} ${type}`;
  }
}
