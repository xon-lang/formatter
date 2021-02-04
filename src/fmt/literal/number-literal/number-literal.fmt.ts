import { NumberLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class NumberLiteralFormatter extends LiteralFormatter {
  constructor(public tree: NumberLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return this.tree.ctx.NumberLiteral().text.trim();
  }
}
