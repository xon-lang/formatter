import { OperatorMemberTree } from '@xon/ast';
import { config } from '../../../../formatter-config';
import { formatParameterTree } from '../../../parameter/parameter.fmt.helper';
import { formatStatementTree } from '../../../statement/statement.fmt.helper';
import { formatTypeTree } from '../../../type/type.fmt.helper';
import { MemberFormatter } from '../member.fmt';

export class OperatorMemberFormatter extends MemberFormatter {
  tree: OperatorMemberTree;

  formattedCode(): string {
    const name = this.tree.name;
    const parameters = this.tree.parameters.map((x) => formatParameterTree(x)).join(', ');
    const returnType = formatTypeTree(this.tree.returnType);
    const statements = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `${name} (${parameters}) ${returnType}:${config.nl}${config.indent(statements || '--')}`;
  }
}
