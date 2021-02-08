import { CodeFormatter } from './code-formatter';
import { config, FormatterConfig } from './formatter-config';

test('program', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+2\nClass:\n    prop Integer';
  const newConfig = new FormatterConfig();
  newConfig.newLine = '\r\n';
  newConfig.tabSpaces = '    ';

  const fmt = new CodeFormatter(code, newConfig).formattedCode();
  expect(fmt).toBe(
    `my-scope/libname: UUID as U4, Math${config.newLine2}` +
      `2 + 2${config.newLine2}` +
      `Class:${config.newLine}` +
      `${config.tabSpaces}prop Integer`
  );
});
