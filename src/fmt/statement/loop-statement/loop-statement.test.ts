import { formatStatementCode } from '../statement.fmt.helper';

test('has value and index', () => {
  const code = 'loop:\n    i   + val';
  expect(formatStatementCode(code)).toBe('loop:\n    i + val');
});
