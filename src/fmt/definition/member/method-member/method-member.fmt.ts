import { MethodMemberTree } from '@xon/ast';
import { config } from '../../../../formatter-config';
import { formatParameterTree } from '../../../parameter/parameter.fmt.helper';
import { formatStatementTree } from '../../../statement/statement.fmt.helper';
import { formatTypeTree } from '../../../type/type.fmt.helper';
import { MemberFormatter } from '../member.fmt';

export class MethodMemberFormatter extends MemberFormatter {
  tree: MethodMemberTree;

  formattedCode(): string {
    const name = this.tree.name;
    const declaredGenerics = this.tree.declaredGenerics.length
      ? `<${this.tree.declaredGenerics.join(', ')}>`
      : '';
    const parameters = this.tree.parameters.map((x) => formatParameterTree(x)).join(', ');
    const returnType = formatTypeTree(this.tree.returnType);
    const body = this.tree.body?.map((x) => formatStatementTree(x)).join(config.nl);

    if (body !== undefined)
      return `${name}${declaredGenerics}(${parameters}) ${returnType}:${config.nl}${config.indent(
        body || '--'
      )}`;

    return `${name}${declaredGenerics}(${parameters}) ${returnType}`;
  }
}
