import { InitMemberTree } from '@xon/ast';
import { config } from '../../../../formatter-config';
import { formatStatementTree } from '../../../statement/statement.fmt.helper';
import { MemberFormatter } from '../member.fmt';

export class InitMemberFormatter extends MemberFormatter {
  tree: InitMemberTree;

  formattedCode(): string {
    const name = this.tree.name;
    const statements = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `${name}:${config.nl}${config.indent(statements || '--')}`;
  }
}
