import { LoopStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { getExpressionFormatter } from '../../expression/expression-helper';
import { getStatementFormatter } from '../statement-helper';
import { StatementFormatter } from '../statement.fmt';

export class LoopStatementFormatter extends StatementFormatter {
  tree: LoopStatementTree;

  formattedCode(): string {
    const value = this.tree.valueName;
    const key = this.tree.keyName;
    const index = this.tree.indexName;
    const expression =
      (this.tree.expression && getExpressionFormatter(this.tree.expression).formattedCode()) || '';
    const statements = this.tree.statements
      .map((z) => config.tab() + getStatementFormatter(z).formattedCode())
      .join(config.newLine);
    const breakStatements = config.breakLoopStatement || this.tree.statements.length > 1;

    const header = [value, key, index].filter((x) => x).join(', ');

    return `${this.tree.keyword}${header ? ` ${header} in` : ''}${
      expression ? ` ${expression}` : ''
    }:${breakStatements ? config.newLine + statements : ` ${statements.trim()}`}`;
  }
}
