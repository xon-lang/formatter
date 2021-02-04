import { parseImports } from '@xon/ast';
import { ImportsFormatter } from './imports.fmt';

test('imports', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math   ';
  const tree = parseImports(code);
  const fmt = new ImportsFormatter(tree);
  expect(fmt.formattedCode()).toBe('my-scope/libname: UUID as U4, Math');
});
