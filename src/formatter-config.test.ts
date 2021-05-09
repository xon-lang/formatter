import { formatCode } from './code-formatter';
import { FormatterConfig } from './formatter-config';

test('config', () => {
  const code = '12341234\n\n\n\nif   a:\n    1   + 1';
  const config = new FormatterConfig({
    nl: '\r\n',
    tabWidth: 8,
    digitsGroupCount: 3,
  });

  expect(formatCode(code, config)).toBe(`12_341_234\r\nif a:\r\n        1 + 1`);
});
