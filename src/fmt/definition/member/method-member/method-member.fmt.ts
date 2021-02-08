import { MethodMemberTree } from '@xon/ast';
import { config } from '../../../../formatter-config';
import { getStatementsFormatters } from '../../../statement/statement-helper';
import { TypeFormatter } from '../../../type/type.fmt';
import { MemberFormatter } from '../member.fmt';

export class MethodMemberFormatter extends MemberFormatter {
  tree: MethodMemberTree;

  formattedCode(): string {
    const name = this.tree.name.trim();
    const args = this.tree.args
      .map((x) => `${x.name} ${new TypeFormatter(x.type).formattedCode()}`)
      .join(', ');
    const returnType = new TypeFormatter(this.tree.returnType).formattedCode();
    const statements = getStatementsFormatters(this.tree.statements)
      .map((x) => config.tabSpaces() + x.formattedCode())
      .join(config.newLine);

    return `${name} (${args}) ${returnType}:${config.newLine}${statements}`;
  }
}
