import { MemberExpressionTree } from '@xon/ast';
import { ExpressionFormatter, formatExpressionTree } from '../expression.fmt';

export class MemberExpressionFormatter extends ExpressionFormatter {
  tree: MemberExpressionTree;

  formattedCode(): string {
    const instance = formatExpressionTree(this.tree.instance);
    return `${instance}.${this.tree.name}`;
  }
}
