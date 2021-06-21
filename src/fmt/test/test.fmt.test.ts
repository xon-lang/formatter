import { formatTestCode } from './test.fmt.helper';

test('has body', () => {
  const code = 'test   "abc"   :\n    actual:   1    +  1\n    expect  :  2';
  expect(formatTestCode(code)).toBe('test "abc":\n    actual: 1 + 1\n    expect: 2');
});
