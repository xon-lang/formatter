import { CharLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class CharLiteralFormatter extends LiteralFormatter {
  tree: CharLiteralTree;

  formattedCode(): string {
    return this.tree.ctx.CHAR_LITERAL().text.trim();
  }
}
