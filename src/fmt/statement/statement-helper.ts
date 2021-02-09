import {
  AssignmentStatementTree,
  ExpressionStatementTree,
  IfStatementTree,
  LoopStatementTree,
  ReturnStatementTree,
  StatementTree,
} from '@xon/ast';
import { AssignmentStatementFormatter } from './assignment-statement/assignment-statement.fmt';
import { ExpressionStatementFormatter } from './expression-statement/expression-statement.fmt';
import { IfStatementFormatter } from './if-statement/if-statement.fmt';
import { LoopStatementFormatter } from './loop-statement/loop-statement.fmt';
import { ReturnStatementFormatter } from './return-statement/return-statement.fmt';
import { StatementFormatter } from './statement.fmt';

export function getStatementFormatter(tree: StatementTree): StatementFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementFormatter(tree);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementFormatter(tree);
  if (tree instanceof AssignmentStatementTree) return new AssignmentStatementFormatter(tree);
  if (tree instanceof IfStatementTree) return new IfStatementFormatter(tree);
  if (tree instanceof LoopStatementTree) return new LoopStatementFormatter(tree);

  throw Error(`No Statement found for ${tree?.constructor?.name}`);
}

export function getStatementsFormatters(statements: StatementTree[]): StatementFormatter[] {
  return statements.map(getStatementFormatter);
}
