import { formatMemberCode } from '../member.fmt.helper';

test('has a statement', () => {
  const code = 'init  :        this.dom =   bom';
  expect(formatMemberCode(code)).toBe('init:\n    this.dom = bom');
});

test('has several statements', () => {
  const code = 'init  :\n    this.dom =   bom\n    prop =  3  ';
  expect(formatMemberCode(code)).toBe('init:\n    this.dom = bom\n    prop = 3');
});
