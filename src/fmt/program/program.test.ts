import { parseProgram } from '@xon/ast';
import { ProgramFormatter } from './program.fmt';

test('program', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math\n2+2\n';
  const tree = parseProgram(code);
  const fmt = new ProgramFormatter(tree);
  console.log(fmt.formattedCode());

  expect(fmt.formattedCode()).toBe('my-scope/libname: UUID as U4, Math\n2 + 2');
});
