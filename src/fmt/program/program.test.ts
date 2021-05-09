import { formatProgramCode } from '../program/program.fmt.helper';

test('program', () => {
  const code = '1 +   1';
  expect(formatProgramCode(code)).toBe(`1 + 1`);
});
