import { ArgumentTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';
import { formatExpressionTree } from '../expression/expression-helper';

export class ArgumentFormatter extends BaseFormatter {
  tree: ArgumentTree;

  formattedCode(): string {
    const name = this.tree.name ? this.tree.name + ' = ' : '';
    const value = formatExpressionTree(this.tree.value);
    return `${name}${value}`;
  }
}
