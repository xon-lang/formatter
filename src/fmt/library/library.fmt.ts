import { LibraryTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export class LibraryFormatter extends BaseFormatter {
  constructor(public tree: LibraryTree) {
    super(tree);
  }

  formattedCode(): string {
    const membersFmt = this.tree.members
      .map((x) => `${x.name}${x.alias ? ` as ${x.alias}` : ''}`)
      .join(', ');
    return `${this.tree.scope}/${this.tree.name}: ${membersFmt}`;
  }
}
