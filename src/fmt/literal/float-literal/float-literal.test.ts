import { formatLiteralCode } from '../literal.fmt.helper';

test('has float value', () => {
  const code = '12X3.167a  ';
  expect(formatLiteralCode(code)).toBe('12x3.167A');
});

test('has float underscore value', () => {
  const code = '16X123abc_123.ddd12  ';
  expect(formatLiteralCode(code)).toBe('16x123ABC_123.DDD12');
});

test('has float underscore value with grouping', () => {
  const code = '16X123abc_123.ddd12  ';
  expect(formatLiteralCode(code)).toBe('16x1_23AB_C123.D_DD12');
});
