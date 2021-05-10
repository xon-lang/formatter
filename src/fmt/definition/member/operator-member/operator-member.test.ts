import { formatMemberCode } from '../member.fmt.helper';

test('has plus operator member', () => {
  const code = '+ (  other Integer ) Integer :  \n    ';
  expect(formatMemberCode(code)).toBe('+ (other Integer) Integer:\n    --');
});

test('has no body', () => {
  const code = '+ (  other  Integer ) Integer  ';
  expect(formatMemberCode(code)).toBe('+ (other Integer) Integer');
});
