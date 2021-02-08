import { ReturnStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression-helper';
import { StatementFormatter } from '../statement.fmt';

export class ReturnStatementFormatter extends StatementFormatter {
  tree: ReturnStatementTree;

  formattedCode(): string {
    const expression = getExpressionFormatter(this.tree.value);
    return `return ${expression.formattedCode()}`;
  }
}
