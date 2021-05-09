import { formatCode } from './code-formatter';

test('config', () => {
  const code = '12341234\n\n\n\nif   a:\n    1   + 1';
  expect(formatCode(code)).toBe(`12341234\nif a:\n    1 + 1`);
});
