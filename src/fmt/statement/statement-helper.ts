import { ExpressionStatementTree, LineBreakStatementTree, StatementTree } from '@xon/ast';
import { ExpressionStatementFormatter } from './expression-statement/expression-statement.fmt';
import { StatementFormatter } from './statement.fmt';

export function getStatementFormatter(tree: StatementTree): StatementFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementFormatter(tree);

  throw Error(`No Statement found for ${tree?.constructor?.name}`);
}

export function getStatementsFormatters(statements: StatementTree[]): StatementFormatter[] {
  return statements
    .filter((x) => !(x instanceof LineBreakStatementTree))
    .map(getStatementFormatter);
}
