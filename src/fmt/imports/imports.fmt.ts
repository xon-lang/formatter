import { parseImports } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export class ImportsFormatter extends BaseFormatter {
  formattedCode(): string {
    const tree = parseImports(this.code);
    const membersFmt = tree.members
      .map((x) => `${x.name}${x.alias ? ` as ${x.alias}` : ''}`)
      .join(', ');
    return `${tree.scopeName}/${tree.libName}: ${membersFmt}`;
  }
}
