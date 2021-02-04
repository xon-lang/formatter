import { BooleanLiteralTree, parseLiteral } from '@xon/ast';
import { BooleanLiteralFormatter } from './boolean-literal.fmt';

test('true literal', () => {
  const code = 'true';
  const tree = parseLiteral<BooleanLiteralTree>(code);
  const fmt = new BooleanLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('true');
});

test('false literal', () => {
  const code = 'false';
  const tree = parseLiteral<BooleanLiteralTree>(code);
  const fmt = new BooleanLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('false');
});
