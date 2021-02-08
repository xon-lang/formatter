import { parseLibrary } from '@xon/ast';
import { LibraryFormatter } from './library.fmt';

test('imports', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math   ';
  const tree = parseLibrary(code);
  const fmt = new LibraryFormatter(tree);
  expect(fmt.formattedCode()).toBe('my-scope/libname: UUID as U4, Math');
});
