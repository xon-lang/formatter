import { formatArgumentCode } from './argument.fmt.helper';

test('has name', () => {
  const code = 'id=3';
  expect(formatArgumentCode(code)).toBe('id = 3');
});
