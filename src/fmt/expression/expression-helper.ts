import { AddExpressionTree, ExpressionTree, LiteralExpressionTree } from '@xon/ast';
import { AddExpressionFormatter } from './add-expression/add-expression.fmt';
import { ExpressionFormatter } from './expression.fmt';
import { LiteralExpressionFormatter } from './literal-expression/literal-expression.fmt';

export function getExpressionFormatter(tree: ExpressionTree): ExpressionFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return new LiteralExpressionFormatter(tree);
  if (tree instanceof AddExpressionTree) return new AddExpressionFormatter(tree);

  throw Error(`No Expression found for ${tree?.constructor?.name}`);
}

export function getExpressionsFormatters(expressions: ExpressionTree[]): ExpressionFormatter[] {
  return expressions.map(getExpressionFormatter);
}
