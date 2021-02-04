import { ImportsFormatter } from './imports.fmt';

test('imports', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math   ';
  const formatter = new ImportsFormatter(code);
  expect(formatter.formattedCode()).toBe('my-scope/libname: UUID as U4, Math');
});
