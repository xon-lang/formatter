import { InstantiationExpressionTree } from '@xon/ast';
import { formatArgumentTree } from '../../argument/argument.fmt.helper';
import { formatTypeTree } from '../../type/type.fmt.helper';
import { ExpressionFormatter } from '../expression.fmt';

export class InstantiationExpressionFormatter extends ExpressionFormatter {
  tree: InstantiationExpressionTree;

  formattedCode(): string {
    const type = formatTypeTree(this.tree.type);
    const args = this.tree.arguments.map((x) => formatArgumentTree(x)).join(', ');
    return `${type}(${args})`;
  }
}
