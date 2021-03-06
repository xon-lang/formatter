import { ReturnStatementTree } from '@xon/ast';
import { getExpressionFormatter } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';

export class ReturnStatementFormatter extends StatementFormatter {
  tree: ReturnStatementTree;

  formattedCode(): string {
    const expression = getExpressionFormatter(this.tree.value);
    return `return ${expression.formattedCode()}`;
  }
}
