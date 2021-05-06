import { IntegerLiteralTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { LiteralFormatter } from '../literal.fmt';
import { groupedDigitsByUnderscore } from '../literal.fmt.helper';

export class IntegerLiteralFormatter extends LiteralFormatter {
  tree: IntegerLiteralTree;

  formattedCode(): string {
    const radix = this.tree.radix ? `${this.tree.radix}x` : '';
    const integer = config.digitLetterCaseIsUpper
      ? this.tree.integer.toUpperCase()
      : this.tree.integer.toLowerCase();
console.log('---',this.tree.integer);


    if (config.digitsGroupCount) {
      return `${radix}${groupedDigitsByUnderscore(integer)}`;
    }
    return `${radix}${integer}`;
  }
}
