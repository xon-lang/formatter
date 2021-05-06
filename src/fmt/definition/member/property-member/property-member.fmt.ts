import { PropertyMemberTree } from '@xon/ast';
import { formatExpressionTree } from '../../../expression/expression.fmt';
import { formatTypeTree } from '../../../type/type.fmt.helper';
import { MemberFormatter } from '../member.fmt';

export class PropertyMemberFormatter extends MemberFormatter {
  tree: PropertyMemberTree;

  formattedCode(): string {
    const name = this.tree.name;
    const type = formatTypeTree(this.tree.type);
    const value = this.tree.value ? ` = ${formatExpressionTree(this.tree.value)}` : '';

    return `${name} ${type}${value}`;
  }
}
