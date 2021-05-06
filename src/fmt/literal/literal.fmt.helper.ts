import {
  BooleanLiteralTree,
  CharLiteralTree,
  FloatLiteralTree,
  IntegerLiteralTree,
  LiteralTree,
  NullLiteralTree,
  parseLiteral,
  StringLiteralTree,
} from '@xon/ast';
import { config } from '../../formatter-config';
import { BooleanLiteralFormatter } from './boolean-literal/boolean-literal.fmt';
import { CharLiteralFormatter } from './char-literal/char-literal.fmt';
import { FloatLiteralFormatter } from './float-literal/float-literal.fmt';
import { IntegerLiteralFormatter } from './integer-literal/integer-literal.fmt';
import { LiteralFormatter } from './literal.fmt';
import { NullLiteralFormatter } from './null-literal/null-literal.fmt';
import { StringLiteralFormatter } from './string-literal/string-literal.fmt';

export function getLiteralFormatter(tree: LiteralTree): LiteralFormatter {
  if (tree === undefined) return undefined;

  if (tree instanceof BooleanLiteralTree) return new BooleanLiteralFormatter(tree);
  if (tree instanceof CharLiteralTree) return new CharLiteralFormatter(tree);
  if (tree instanceof FloatLiteralTree) return new FloatLiteralFormatter(tree);
  if (tree instanceof IntegerLiteralTree) return new IntegerLiteralFormatter(tree);
  if (tree instanceof NullLiteralTree) return new NullLiteralFormatter(tree);
  if (tree instanceof StringLiteralTree) return new StringLiteralFormatter(tree);

  throw Error(`Literal formatter not found for "${tree.constructor.name}"`);
}

export function getLiteralsFormatters(literals: LiteralTree[]): LiteralFormatter[] {
  return literals.map(getLiteralFormatter);
}

export function groupedDigitsByUnderscore(number: string): string {
  if (config.digitsGroupCount === 0) return number.replace(/_/g, '');
  const numberClean = number.replace(/_/g, '');
  const before = numberClean.slice(0, numberClean.length % config.digitsGroupCount);
  const after =
    numberClean
      .slice(numberClean.length % config.digitsGroupCount)
      .match(new RegExp(`(.{${config.digitsGroupCount}})`, 'g'))
      ?.join('_') || '';
  return `${before}${before && after && '_'}${after}`;
}

export function formatLiteralTree(tree: LiteralTree): string {
  return getLiteralFormatter(tree).formattedCode();
}

export function formatLiteralCode(code: string): string {
  return getLiteralFormatter(parseLiteral(code)).formattedCode();
}
