import { IdExpressionTree, parseExpression } from '@xon/ast';
import { IdExpressionFormatter } from './id-expression.fmt';

test('literal expression', () => {
  const code = 'list   ';
  const tree = parseExpression<IdExpressionTree>(code);
  const fmt = new IdExpressionFormatter(tree);
  expect(fmt.formattedCode()).toBe('list');
});
