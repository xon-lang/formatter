import { formatLiteralCode } from '../literal.fmt.helper';

test('has string value', () => {
  const code = '"hello"  ';
  expect(formatLiteralCode(code)).toBe('"hello"');
});
