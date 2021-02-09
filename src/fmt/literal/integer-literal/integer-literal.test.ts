import { IntegerLiteralTree, parseLiteral } from '@xon/ast';
import { config } from '../../../formatter-config';
import { IntegerLiteralFormatter } from './integer-literal.fmt';

test('integer literal', () => {
  const code = '123  ';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  const fmt = new IntegerLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('123');
});

test('integer literal underscore', () => {
  const code = '16Xabc23_123  ';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  const fmt = new IntegerLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('16xABC23_123');
});

test('integer literal config', () => {
  const code = '16Xabc23_123  ';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  const fmt = new IntegerLiteralFormatter(tree);
  config.digitsGroupCount = 3
  expect(fmt.formattedCode()).toBe('16xAB_C23_123');
});
