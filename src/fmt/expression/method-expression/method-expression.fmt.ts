import { MethodExpressionTree } from '@xon/ast';
import { formatArgumentTree } from '../../argument/argument.fmt.helper';
import { formatTypeTree } from '../../type/type.fmt.helper';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class MethodExpressionFormatter extends ExpressionFormatter {
  tree: MethodExpressionTree;

  formattedCode(): string {
    const instance = formatExpressionTree(this.tree.instance);
    const generics = this.tree.generics.map((x) => formatTypeTree(x)).join(', ');
    const args = this.tree.arguments.map((x) => formatArgumentTree(x)).join(', ');

    if (generics) return `${instance}<${generics}>(${args})`;

    return `${instance}(${args})`;
  }
}
