import { StringLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class StringLiteralFormatter extends LiteralFormatter {
  constructor(public tree: StringLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return this.tree.ctx.StringLiteral().text.trim();
  }
}
