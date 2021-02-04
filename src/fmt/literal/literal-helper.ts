import { BooleanLiteralTree, LiteralTree, NumberLiteralTree, StringLiteralTree } from '@xon/ast';
import { BooleanLiteralFormatter } from './boolean-literal/boolean-literal.fmt';
import { LiteralFormatter } from './literal.fmt';
import { NumberLiteralFormatter } from './number-literal/number-literal.fmt';
import { StringLiteralFormatter } from './string-literal/string-literal.fmt';

export function getLiteralFormatter(tree: LiteralTree<unknown>): LiteralFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof BooleanLiteralTree) return new BooleanLiteralFormatter(tree);
  if (tree instanceof NumberLiteralTree) return new NumberLiteralFormatter(tree);
  if (tree instanceof StringLiteralTree) return new StringLiteralFormatter(tree);

  throw Error(`No Literal found for ${tree?.constructor?.name}`);
}

export function getLiteralsFormatters(literals: LiteralTree<unknown>[]): LiteralFormatter[] {
  return literals.map(getLiteralFormatter);
}
