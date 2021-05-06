import { formatMemberCode } from '../member.fmt.helper';

test('property', () => {
  const code = 'a   Integer  ';
  expect(formatMemberCode(code)).toBe('a Integer');
});
