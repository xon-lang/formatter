import { IntegerLiteralTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { groupedDigitsByUnderscore } from '../literal-helper';
import { LiteralFormatter } from '../literal.fmt';

export class IntegerLiteralFormatter extends LiteralFormatter {
  tree: IntegerLiteralTree;

  formattedCode(): string {
    const radix = this.tree.radix ? `${this.tree.radix}x` : '';
    const integer = this.tree.integer.toUpperCase();

    if (typeof config.digitsGroupCount !== 'undefined') {
      return `${radix}${groupedDigitsByUnderscore(integer)}`;
    }
    return `${radix}${integer}`;
  }
}
