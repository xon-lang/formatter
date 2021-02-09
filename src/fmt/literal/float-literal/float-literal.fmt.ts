import { FloatLiteralTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { groupedDigitsByUnderscore } from '../literal-helper';
import { LiteralFormatter } from '../literal.fmt';

export class FloatLiteralFormatter extends LiteralFormatter {
  tree: FloatLiteralTree;

  formattedCode(): string {
    const radix = this.tree.radix ? `${this.tree.radix}x` : '';
    const integer = this.tree.integer.toUpperCase();
    const fraction = this.tree.fraction.toUpperCase();

    if (typeof config.digitsGroupCount !== 'undefined') {
      const integerGrouped = groupedDigitsByUnderscore(integer);
      const fractionGrouped = groupedDigitsByUnderscore(fraction);
      return `${radix}${integerGrouped}.${fractionGrouped}`;
    }

    return `${radix}${integer}.${fraction}`;
  }
}
