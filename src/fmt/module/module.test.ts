import { formatModuleCode } from '../module/module.fmt.helper';

test('module', () => {
  const code = '1 +   1';
  expect(formatModuleCode(code)).toBe(`1 + 1`);
});
