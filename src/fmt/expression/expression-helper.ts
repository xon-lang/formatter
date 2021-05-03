import { ExpressionTree, IdExpressionTree, LiteralExpressionTree, parseExpression } from '@xon/ast';
import { ExpressionFormatter } from './expression.fmt';
import { IdExpressionFormatter } from './id-expression/id-expression.fmt';
import { LiteralExpressionFormatter } from './literal-expression/literal-expression.fmt';

export function getExpressionFormatter(tree: ExpressionTree): ExpressionFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return new LiteralExpressionFormatter(tree);
  if (tree instanceof IdExpressionTree) return new IdExpressionFormatter(tree);

  throw Error(`No Expression found for ${tree?.constructor?.name}`);
}

export function getExpressionsFormatters(expressions: ExpressionTree[]): ExpressionFormatter[] {
  return expressions.map(getExpressionFormatter);
}

export function formatExpressionTree(tree: ExpressionTree): string {
  return getExpressionFormatter(tree).formattedCode();
}

export function formatExpressionCode(code: string): string {
  const tree = parseExpression(code);
  return getExpressionFormatter(tree).formattedCode();
}
