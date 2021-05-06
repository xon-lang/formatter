import { NullLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class NullLiteralFormatter extends LiteralFormatter {
  tree: NullLiteralTree;

  formattedCode(): string {
    return this.tree.ctx.NULL_LITERAL().text.trim();
  }
}
