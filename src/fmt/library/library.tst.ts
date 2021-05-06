import { formatLiteralCode } from '../literal/literal.fmt.helper';

test('imports', () => {
  const code = 'my-scope   / libname : UUID as U4  ,  Math   ';
  expect(formatLiteralCode(code)).toBe('my-scope/libname: UUID as U4, Math');
});
