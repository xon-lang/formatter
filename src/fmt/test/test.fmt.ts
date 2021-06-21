import { TestTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatExpressionTree } from '../expression/expression.fmt.helper';
import { formatStatementTree } from '../statement/statement.fmt.helper';

export class TestFormatter extends BaseFormatter {
  tree: TestTree;

  formattedCode(): string {
    const name = formatExpressionTree(this.tree.name);
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);
    return `test ${name}:${config.nl}${config.indent(body)}`;
  }
}
