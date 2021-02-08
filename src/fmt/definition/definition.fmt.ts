import { DefinitionTree } from '@xon/ast';
import { FormatterConfig } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { TypeFormatter } from '../type/type.fmt';
import { getMemberFormatter } from './member/member-helper';

export class DefinitionFormatter extends BaseFormatter {
  tree: DefinitionTree;

  formattedCode(): string {
    const name = this.tree.name.trim();
    const inheritance =
      this.tree.inheritance && this.tree.inheritance.name !== 'Any'
        ? ` is ${new TypeFormatter(this.tree.inheritance).formattedCode()}`
        : '';

    const properties = this.tree.properties
      .map((x) => FormatterConfig.current.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);
    const methods = this.tree.methods
      .map((x) => FormatterConfig.current.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);
    const infixOperators = this.tree.infixOperators
      .map((x) => FormatterConfig.current.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(FormatterConfig.current.newLine);

    return (
      `${name}${inheritance}:` +
      `${properties ? FormatterConfig.current.newLine : ''}${properties}` +
      `${methods ? FormatterConfig.current.newLine : ''}${methods}` +
      `${infixOperators ? FormatterConfig.current.newLine : ''}${infixOperators}`
    );
  }
}
