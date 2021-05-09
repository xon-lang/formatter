import { formatStatementCode } from '../statement.fmt.helper';

test('has value and index', () => {
  const code = 'while   n   >2 :  \n    i   + val';
  expect(formatStatementCode(code)).toBe('while n > 2:\n    i + val');
});
