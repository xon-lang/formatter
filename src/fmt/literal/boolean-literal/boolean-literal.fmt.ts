import { BooleanLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class BooleanLiteralFormatter extends LiteralFormatter<BooleanLiteralTree> {
  formattedCode(): string {
    return this.tree.value.toString();
  }
}
