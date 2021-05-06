import { formatDefinitionCode } from './definition.fmt.helper';

test('definition', () => {
  const code = 'Real  is   Float : \n    prop   Integer  ';
  expect(formatDefinitionCode(code)).toBe(`Real is Float:\n    prop Integer`);
});

test('another definition', () => {
  const code = `Class:
    mu (k Integer, b Number) String:
        l + d`;
  expect(formatDefinitionCode(code)).toBe(
    `Class:\n    mu (k Integer, b Number) String:\n        l + d`
  );
});
