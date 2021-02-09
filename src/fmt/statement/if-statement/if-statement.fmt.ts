import { IfStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { getExpressionFormatter } from '../../expression/expression-helper';
import { getStatementFormatter } from '../statement-helper';
import { StatementFormatter } from '../statement.fmt';

export class IfStatementFormatter extends StatementFormatter {
  tree: IfStatementTree;

  formattedCode(): string {
    const items = this.tree.items.map((x) => {
      const condition = getExpressionFormatter(x.condition).formattedCode();
      const statements = x.statements
        .map((z) => config.tab() + getStatementFormatter(z).formattedCode())
        .join(config.newLine);
      const breakStatements = config.breakIfStatement || x.statements.length > 1;
      return `${x.operator}${condition ? ` ${condition}` : ''}:${
        breakStatements ? config.newLine + statements : ` ${statements.trim()}`
      }`;
    });
    return items.join(config.newLine);
  }
}
