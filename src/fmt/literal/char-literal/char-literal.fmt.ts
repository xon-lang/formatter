import { CharLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class CharLiteralFormatter extends LiteralFormatter {
  constructor(public tree: CharLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return this.tree.ctx.CharLiteral().text.trim();
  }
}
