import {
  ExpressionStatementTree,
  IdAssignmentStatementTree,
  IfStatementTree,
  parseStatement,
  ReturnStatementTree,
  StatementTree,
} from '@xon/ast';
import { IdAssignmentStatementFormatter } from './assignment-statement/assignment-statement.fmt';
import { ExpressionStatementFormatter } from './expression-statement/expression-statement.fmt';
import { IfStatementFormatter } from './if-statement/if-statement.fmt';
import { ReturnStatementFormatter } from './return-statement/return-statement.fmt';
import { StatementFormatter } from './statement.fmt';

export function getStatementFormatter(tree: StatementTree): StatementFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementFormatter(tree);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementFormatter(tree);
  if (tree instanceof IdAssignmentStatementTree) return new IdAssignmentStatementFormatter(tree);
  if (tree instanceof IfStatementTree) return new IfStatementFormatter(tree);

  throw Error(`Member formatter not found for "${tree.constructor.name}"`);
}

export function formatStatementTree(tree: StatementTree): string {
  return getStatementFormatter(tree).formattedCode();
}

export function formatStatementCode(code: string): string {
  return getStatementFormatter(parseStatement(code)).formattedCode();
}
