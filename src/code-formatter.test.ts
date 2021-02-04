import { CodeFormatter } from './code-formatter';
import { FormatterConfig } from './formatter-config';

test('program', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+2\n';
  const config: FormatterConfig = {
    newLine: '\r\n',
  };
  const fmt = new CodeFormatter(code, config);
  expect(fmt.formattedCode()).toBe('my-scope/libname: UUID as U4, Math\r\n2 + 2');
});
