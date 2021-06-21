import { AssertStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { formatExpressionTree } from '../../expression/expression.fmt.helper';
import { StatementFormatter } from '../statement.fmt';

export class AssertStatementFormatter extends StatementFormatter {
  tree: AssertStatementTree;

  formattedCode(): string {
    const actual = formatExpressionTree(this.tree.actual);
    const expect = formatExpressionTree(this.tree.expect);
    return `actual: ${actual}${config.nl}expect: ${expect}`;
  }
}
