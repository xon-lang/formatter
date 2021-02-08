import { CodeFormatter } from './code-formatter';
import { FormatterConfig } from './formatter-config';

test('program', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+2\nClass:\n    prop Integer';
  const config: FormatterConfig = {
    newLine: '\r\n',
    tabSpaces: '\t',
  };
  const fmt = new CodeFormatter(code, config).formattedCode();
  expect(fmt).toBe('my-scope/libname: UUID as U4, Math\r\n2 + 2\r\nClass:\r\n\tprop Integer');
});
