import { ImportsTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export class ImportsFormatter extends BaseFormatter {
  constructor(public tree: ImportsTree) {
    super(tree);
  }

  formattedCode(): string {
    const membersFmt = this.tree.members
      .map((x) => `${x.name}${x.alias ? ` as ${x.alias}` : ''}`)
      .join(', ');
    return `${this.tree.scopeName}/${this.tree.libName}: ${membersFmt}`;
  }
}
