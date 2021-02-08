import { IntegerLiteralTree, parseLiteral } from '@xon/ast';
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
