import { NumberLiteralTree, parseLiteral } from '@xon/ast';
import { NumberLiteralFormatter } from './number-literal.fmt';

test('number literal', () => {
  const code = '123  ';
  const tree = parseLiteral<NumberLiteralTree>(code);
  const fmt = new NumberLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('123');
});

test('number literal underscore', () => {
  const code = '123_123  ';
  const tree = parseLiteral<NumberLiteralTree>(code);
  const fmt = new NumberLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('123_123');
});
