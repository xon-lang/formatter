import { formatMemberCode } from '../member.fmt.helper';

test('has a statement', () => {
  const code = 'init  :        dom =   bom';
  expect(formatMemberCode(code)).toBe('init:\n    dom = bom');
});

test('has several statements', () => {
  const code = 'init  :\n    dom  =   bom\n    prop =  3  ';
  expect(formatMemberCode(code)).toBe('init:\n    dom = bom\n    prop = 3');
});
