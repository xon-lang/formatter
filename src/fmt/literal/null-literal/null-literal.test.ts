import { formatLiteralCode } from '../literal.fmt.helper';

test('has null value', () => {
  const code = 'null  ';
  expect(formatLiteralCode(code)).toBe('null');
});
