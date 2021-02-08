import { IntegerLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class IntegerLiteralFormatter extends LiteralFormatter {
  constructor(public tree: IntegerLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return `${this.tree.radix ? `${this.tree.radix}x` : ''}${this.tree.integer.toUpperCase()}`;
  }
}
