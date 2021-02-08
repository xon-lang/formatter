import { TypeTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export class TypeFormatter extends BaseFormatter {
  tree: TypeTree;

  formattedCode(): string {
    const name = this.tree.name.trim();
    const generics = this.tree.generics.map((x) => new TypeFormatter(x).formattedCode()).join(', ');

    if (generics.length) return `${name}<${generics}>`;
    return name;
  }
}
