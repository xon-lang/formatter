import { FloatLiteralTree, parseLiteral } from '@xon/ast';
import { config } from '../../../formatter-config';
import { FloatLiteralFormatter } from './float-literal.fmt';

test('float literal', () => {
  const code = '12X3.167a  ';
  const tree = parseLiteral<FloatLiteralTree>(code);
  const fmt = new FloatLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('12x3.167A');
});

test('float literal underscore', () => {
  const code = '16X123abc_123.ddd12  ';
  const tree = parseLiteral<FloatLiteralTree>(code);
  const fmt = new FloatLiteralFormatter(tree);
  expect(fmt.formattedCode()).toBe('16x123ABC_123.DDD12');
});

test('float literal grouped', () => {
  const code = '16X123abc_123.ddd12  ';
  const tree = parseLiteral<FloatLiteralTree>(code);
  const fmt = new FloatLiteralFormatter(tree);
  config.digitsGroupCount = 4;
  expect(fmt.formattedCode()).toBe('16x1_23AB_C123.D_DD12');
});
