import { parseLiteral, CharLiteralTree } from '@xon/ast';
import { CharLiteralFormatter } from './char-literal.fmt';

test('string literal', () => {
  const code =  "'A' ";
  const tree = parseLiteral<CharLiteralTree>(code);
  const fmt = new CharLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe("'A'");
});
