import { CodeFormatter } from './code-formatter';
import { config, FormatterConfig } from './formatter-config';

test('config', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+22222\nClass:\n    prop Integer';
  const newConfig = new FormatterConfig({
    newLine: '\r\n',
    tabWidth: 8,
    digitsGroupCount: 3,
  });

  const fmt = new CodeFormatter(code, newConfig).formattedCode();
  expect(fmt).toBe(
    `my-scope/libname: UUID as U4, Math${config.emptyLine()}` +
      `2 + 22_222${config.emptyLine()}` +
      `Class:${config.newLine}` +
      `${config.tabSpaces()}prop Integer`
  );
});
