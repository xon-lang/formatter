import { FloatLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class FloatLiteralFormatter extends LiteralFormatter {
  tree: FloatLiteralTree;

  formattedCode(): string {
    return `${
      this.tree.radix ? `${this.tree.radix}x` : ''
    }${this.tree.integer.toLocaleUpperCase()}.${this.tree.fraction.toLocaleUpperCase()}`;
  }
}
