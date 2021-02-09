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

    const members = [...this.tree.properties, ...this.tree.methods, ...this.tree.infixOperators]
      .map((x) => getMemberFormatter(x).formattedCode())
      .join(config.emptyLine())
      .split(config.newLine)
      .map((x) => config.tab() + x)
      .join(config.newLine);

    return `${name}${inheritance}:${members ? config.newLine : ''}${members}`;
  }
}
