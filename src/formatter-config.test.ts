import { CodeFormatter } from './code-formatter';
import { FormatterConfig } from './formatter-config';

test('config', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+22222\nClass:\n    prop Integer';
  const newConfig = new FormatterConfig({
    nl: '\r\n',
    tabWidth: 8,
    digitsGroupCount: 3,
  });

  const fmt = new CodeFormatter(code, newConfig).formattedCode();
  expect(fmt).toBe(
    `my-scope/libname: UUID as U4, Math\r\n2 + 22_222\r\nClass:\r\n    prop Integer`
  );
});
