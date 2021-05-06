import { formatLiteralCode } from '../literal.fmt.helper';

test('has char value', () => {
  const code = "'A'  ";
  expect(formatLiteralCode(code)).toBe("'A'");
});
