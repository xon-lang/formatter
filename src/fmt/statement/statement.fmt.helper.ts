import {
  AssertStatementTree,
  ExpressionStatementTree,
  ForStatementTree,
  IdAssignmentStatementTree,
  IfStatementTree,
  LoopStatementTree,
  parseStatement,
  ReturnStatementTree,
  StatementTree,
  WhileStatementTree,
} from '@xon/ast';
import { AssertStatementFormatter } from './assert-statement/assert-statement.fmt';
import { ExpressionStatementFormatter } from './expression-statement/expression-statement.fmt';
import { ForStatementFormatter } from './for-statement/for-statement.fmt';
import { IdAssignmentStatementFormatter } from './id-assignment-statement/id-assignment-statement.fmt';
import { IfStatementFormatter } from './if-statement/if-statement.fmt';
import { LoopStatementFormatter } from './loop-statement/loop-statement.fmt';
import { ReturnStatementFormatter } from './return-statement/return-statement.fmt';
import { StatementFormatter } from './statement.fmt';
import { WhileStatementFormatter } from './while-statement/while-statement.fmt';

export function getStatementFormatter(tree: StatementTree): StatementFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof AssertStatementTree) return new AssertStatementFormatter(tree);
  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementFormatter(tree);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementFormatter(tree);
  if (tree instanceof IdAssignmentStatementTree) return new IdAssignmentStatementFormatter(tree);
  if (tree instanceof IfStatementTree) return new IfStatementFormatter(tree);
  if (tree instanceof ForStatementTree) return new ForStatementFormatter(tree);
  if (tree instanceof LoopStatementTree) return new LoopStatementFormatter(tree);
  if (tree instanceof WhileStatementTree) return new WhileStatementFormatter(tree);

  throw Error(`Member formatter not found for "${tree.constructor.name}"`);
}

export function formatStatementTree(tree: StatementTree): string {
  return getStatementFormatter(tree).formattedCode();
}

export function formatStatementCode(code: string): string {
  return formatStatementTree(parseStatement(code));
}
