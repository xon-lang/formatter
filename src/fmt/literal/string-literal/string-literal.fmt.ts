import { StringLiteralTree } from '@xon/ast';
import { LiteralFormatter } from '../literal.fmt';

export class StringLiteralFormatter extends LiteralFormatter {
  tree: StringLiteralTree;

  formattedCode(): string {
    return this.tree.ctx.StringLiteral().text.trim();
  }
}
