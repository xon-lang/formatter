import { IfStatementTree } from '@xon/ast';
import { StatementFormatter } from '../statement.fmt';

export class IfStatementFormatter extends StatementFormatter {
  tree: IfStatementTree;

  formattedCode(): string {
    return '';
  }
}
