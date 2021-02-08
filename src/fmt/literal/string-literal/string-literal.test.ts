import { parseLiteral, StringLiteralTree } from '@xon/ast';
import { StringLiteralFormatter } from './string-literal.fmt';

test('string literal', () => {
  const code = '"hello"  ';
  const tree = parseLiteral<StringLiteralTree>(code);
  const fmt = new StringLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('"hello"');
});
