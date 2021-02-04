import { BooleanLiteralFormatter } from './boolean-literal.fmt';

test('true literal', () => {
  const code = 'true';
  const formatter = new BooleanLiteralFormatter(code);
  expect(formatter.formattedCode()).toBe('true');
});

test('false literal', () => {
  const code = 'false';
  const formatter = new BooleanLiteralFormatter(code);
  expect(formatter.formattedCode()).toBe('false');
});
