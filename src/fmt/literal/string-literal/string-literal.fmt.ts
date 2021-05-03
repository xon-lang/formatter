import { StringLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class StringLiteralFormatter extends LiteralFormatter {
  tree: StringLiteralTree;

  formattedCode(): string {
    return this.tree.ctx.STRING_LITERAL().text.trim();
  }
}
