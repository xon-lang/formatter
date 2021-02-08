import { DefinitionTree } from '@xon/ast';
import { config } from '../../formatter-config';
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
      .map((x) => config.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(config.newLine2);
    const methods = this.tree.methods
      .map((x) => config.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(config.newLine2);
    const infixOperators = this.tree.infixOperators
      .map((x) => config.tabSpaces + getMemberFormatter(x).formattedCode())
      .join(config.newLine2);

    return (
      `${name}${inheritance}:` +
      `${properties ? config.newLine2 : ''}${properties}` +
      `${methods ? config.newLine2 : ''}${methods}` +
      `${infixOperators ? config.newLine2 : ''}${infixOperators}`
    );
  }
}
