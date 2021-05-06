import { DefinitionTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatParameterTree } from '../parameter/parameter.fmt.helper';
import { formatTypeTree } from '../type/type.fmt.helper';
import { formatMemberTree } from './member/member.fmt.helper';

export class DefinitionFormatter extends BaseFormatter {
  tree: DefinitionTree;

  formattedCode(): string {
    const name = this.tree.name.trim();
    const declaredGenerics = this.tree.declaredGenerics.length
      ? `<${this.tree.declaredGenerics.join(', ')}>`
      : '';
    const parameters = this.tree.parameters.length
      ? `(${this.tree.parameters.map((x) => formatParameterTree(x)).join(', ')})`
      : '';
    const inheritanceType = this.tree.inheritanceType
      ? ` is ${formatTypeTree(this.tree.inheritanceType)}`
      : '';

    const members = this.tree.members.map((x) => formatMemberTree(x)).join(config.nl2);

    return `${name}${declaredGenerics}${parameters}${inheritanceType}:${config.nl}${config.indent(
      members || '--'
    )}`;
  }
}
