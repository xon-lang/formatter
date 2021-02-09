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

    const properties = this.tree.properties.map(
      (x) => config.tab() + getMemberFormatter(x).formattedCode()
    );
    const methods = this.tree.methods.map(
      (x) => config.tab() + getMemberFormatter(x).formattedCode()
    );
    const infixOperators = this.tree.infixOperators.map(
      (x) => config.tab() + getMemberFormatter(x).formattedCode()
    );

    const members = [...properties, ...methods, ...infixOperators].join(config.emptyLine());

    return `${name}${inheritance}:${members ? config.newLine : ''}${members}`;
  }
}
