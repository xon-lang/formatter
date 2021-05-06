import { MemberExpressionTree } from '@xon/ast';
import { ExpressionFormatter } from '../expression.fmt';
import { formatExpressionTree } from '../expression.fmt.helper';

export class MemberExpressionFormatter extends ExpressionFormatter {
  tree: MemberExpressionTree;

  formattedCode(): string {
    const instance = formatExpressionTree(this.tree.instance);
    return `${instance}.${this.tree.name}`;
  }
}
