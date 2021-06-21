import { LibraryTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export class LibraryFormatter extends BaseFormatter {
  tree: LibraryTree;

  formattedCode(): string {
    const members = this.tree.members
      .map((x) => x.name + (x.alias ? ' as ' + x.alias : ''))
      .join(', ');
    return `${this.tree.scope}.${this.tree.name}: ${members}`;
  }
}
