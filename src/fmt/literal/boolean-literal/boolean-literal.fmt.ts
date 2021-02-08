import { BooleanLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class BooleanLiteralFormatter extends LiteralFormatter {
  tree: BooleanLiteralTree;

  formattedCode(): string {
    return this.tree.ctx.BooleanLiteral().text.trim();
  }
}
