import { formatParameterCode } from './parameter.fmt.helper';

test('has name and type', () => {
  const code = 'id Integer';
  expect(formatParameterCode(code)).toBe('id Integer');
});
