import { NumberLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class NumberLiteralFormatter extends LiteralFormatter<NumberLiteralTree> {
  formattedCode(): string {
    return this.tree.ctx.NumberLiteral().text.trim();
  }
}
