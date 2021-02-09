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
      return `${x.operator}${condition ? ` ${condition}` : ''}:${config.newLine}${statements}`;
    });
    return items.join(config.newLine);
  }
}
