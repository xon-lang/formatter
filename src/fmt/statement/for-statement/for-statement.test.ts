import { formatStatementCode } from '../statement.fmt.helper';

test('has value and index', () => {
  const code = 'for   val ,  i  in  [1 ,  2   ,  3]:\n    i   + val';
  expect(formatStatementCode(code)).toBe('for val, i in [1, 2, 3]:\n    i + val');
});
