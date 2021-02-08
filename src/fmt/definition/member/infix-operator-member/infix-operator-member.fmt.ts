import { InfixOperatorMemberTree } from '@xon/ast';
import { FormatterConfig } from '../../../../formatter-config';
import { getStatementsFormatters } from '../../../statement/statement-helper';
import { TypeFormatter } from '../../../type/type.fmt';
import { MemberFormatter } from '../member.fmt';

export class InfixOperatorMemberFormatter extends MemberFormatter {
  tree: InfixOperatorMemberTree;

  formattedCode(): string {
    const operator = this.tree.operator.trim();
    const arg = `${this.tree.arg.name}${new TypeFormatter(this.tree.arg.type).formattedCode()}`;
    const returnType = new TypeFormatter(this.tree.returnType).formattedCode();
    const statements = getStatementsFormatters(this.tree.statements)
      .map((x) => x.formattedCode())
      .join(FormatterConfig.current.newLine);

    return `infix ${operator} (${arg}) ${returnType}:${FormatterConfig.current.newLine}${statements}`;
  }
}
