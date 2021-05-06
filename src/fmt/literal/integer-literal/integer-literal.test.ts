import { config } from '../../../formatter-config';
import { formatLiteralCode } from '../literal.fmt.helper';

test('has integer value', () => {
  const code = '123  ';
  expect(formatLiteralCode(code)).toBe('123');
});

test('has hexadecimal underscore value', () => {
  const code = '16Xabc23_123  ';
  expect(formatLiteralCode(code)).toBe('16xABC23_123');
});

test('has hexadecimal underscore value with grouping', () => {
  const code = '16Xabc23_123  ';
  config.digitsGroupCount = 3;
  expect(formatLiteralCode(code)).toBe('16xAB_C23_123');
});
