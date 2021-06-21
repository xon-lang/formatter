import { formatStatementCode } from '../statement.fmt.helper';

test('expression statement', () => {
  const code = 'actual: 1  +  1\nexpect  :   2';
  expect(formatStatementCode(code)).toBe('actual: 1 + 1\nexpect: 2');
});
