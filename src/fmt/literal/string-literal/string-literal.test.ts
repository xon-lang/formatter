import { StringLiteralFormatter } from './string-literal.fmt';

test('string literal', () => {
  const code = "'hello'  ";
  const formatter = new StringLiteralFormatter(code);
  expect(formatter.formattedCode()).toBe("'hello'");
});
