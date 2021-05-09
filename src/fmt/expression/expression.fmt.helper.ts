import {
  ArrayExpressionTree,
  ExpressionTree,
  IdExpressionTree,
  IndexExpressionTree,
  InstanceExpressionTree,
  InstantiationExpressionTree,
  LambdaExpressionTree,
  LiteralExpressionTree,
  MemberExpressionTree,
  OperatorExpressionTree,
  parseExpression,
} from '@xon/ast';
import { ArrayExpressionFormatter } from './array-expression/array-expression.fmt';
import { ExpressionFormatter } from './expression.fmt';
import { IdExpressionFormatter } from './id-expression/id-expression.fmt';
import { IndexExpressionFormatter } from './index-expression/index-expression.fmt';
import { InstanceExpressionFormatter } from './instance-expression/instance-expression.fmt';
import { InstantiationExpressionFormatter } from './instantiation-expression/instantiation-expression.fmt';
import { LambdaExpressionFormatter } from './lambda-expression/lambda-expression.fmt';
import { LiteralExpressionFormatter } from './literal-expression/literal-expression.fmt';
import { MemberExpressionFormatter } from './member-expression/member-expression.fmt';
import { OperatorExpressionFormatter } from './operator-expression/operator-expression.fmt';

export function getExpressionFormatter(tree: ExpressionTree): ExpressionFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof IdExpressionTree) return new IdExpressionFormatter(tree);
  if (tree instanceof LambdaExpressionTree) return new LambdaExpressionFormatter(tree);
  if (tree instanceof ArrayExpressionTree) return new ArrayExpressionFormatter(tree);
  if (tree instanceof OperatorExpressionTree) return new OperatorExpressionFormatter(tree);
  if (tree instanceof IndexExpressionTree) return new IndexExpressionFormatter(tree);
  if (tree instanceof InstanceExpressionTree) return new InstanceExpressionFormatter(tree);
  if (tree instanceof MemberExpressionTree) return new MemberExpressionFormatter(tree);
  if (tree instanceof InstantiationExpressionTree)
    return new InstantiationExpressionFormatter(tree);
  if (tree instanceof LiteralExpressionTree) return new LiteralExpressionFormatter(tree);

  throw Error(`Expression formatter not found for "${tree.constructor.name}"`);
}

export function getExpressionsFormatters(expressions: ExpressionTree[]): ExpressionFormatter[] {
  return expressions.map(getExpressionFormatter);
}

export function formatExpressionTree(tree: ExpressionTree): string {
  return getExpressionFormatter(tree).formattedCode();
}

export function formatExpressionCode(code: string): string {
  return getExpressionFormatter(parseExpression(code)).formattedCode();
}
