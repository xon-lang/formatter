import { FloatLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class FloatLiteralFormatter extends LiteralFormatter {
  constructor(public tree: FloatLiteralTree) {
    super(tree);
  }

  formattedCode(): string {
    return `${
      this.tree.radix ? `${this.tree.radix}x` : ''
    }${this.tree.integer.toLocaleUpperCase()}.${this.tree.fraction.toLocaleUpperCase()}`;
  }
}
