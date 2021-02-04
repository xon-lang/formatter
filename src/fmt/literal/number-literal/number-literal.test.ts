import { NumberLiteralFormatter } from './number-literal.fmt';

test('number literal', () => {
  const code = '123 ';
  const formatter = new NumberLiteralFormatter(code);
  expect(formatter.formattedCode()).toBe('123');
});

test('number literal underscore', () => {
  const code = '123_123  ';
  const formatter = new NumberLiteralFormatter(code);
  expect(formatter.formattedCode()).toBe('123_123');
});
