import { formatMemberCode } from '../member.fmt.helper';

test('infix operator member', () => {
  const code = '+ (  other Integer ) Integer :  \n    ';
  expect(formatMemberCode(code)).toBe('+ (other Integer) Integer:\n    --');
});
