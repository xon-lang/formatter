import { CodeFormatter } from './code-formatter';
import { config, FormatterConfig } from './formatter-config';

test('program', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+2\nClass:\n    prop Integer';
  const newConfig = new FormatterConfig({
    newLine: '\r\n',
    tabWidth: 8,
  });

  const fmt = new CodeFormatter(code, newConfig).formattedCode();
  expect(fmt).toBe(
    `my-scope/libname: UUID as U4, Math${config.emptyLine()}` +
      `2 + 2${config.emptyLine()}` +
      `Class:${config.newLine}` +
      `${config.tab()}prop Integer`
  );
});
