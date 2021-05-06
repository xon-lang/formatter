import { formatLiteralCode } from '../literal.fmt.helper';

test('has true value', () => {
  const code = 'true  ';
  expect(formatLiteralCode(code)).toBe('true');
});

test('has false value', () => {
  const code = 'false    ';
  expect(formatLiteralCode(code)).toBe('false');
});
