import { LoopStatementTree } from '@xon/ast';
import { config } from '../../../formatter-config';
import { StatementFormatter } from '../statement.fmt';
import { formatStatementTree } from '../statement.fmt.helper';

export class LoopStatementFormatter extends StatementFormatter {
  tree: LoopStatementTree;

  formattedCode(): string {
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `loop:${config.nl}${config.indent(body)}`;
  }
}
