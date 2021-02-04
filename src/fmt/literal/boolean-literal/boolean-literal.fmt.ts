import { BooleanLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class BooleanLiteralFormatter extends LiteralFormatter {
  constructor(public tree: BooleanLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return this.tree.ctx.BooleanLiteral().text.trim();
  }
}
