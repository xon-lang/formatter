import { LiteralExpressionTree, parseExpression } from '@xon/ast';
import { LiteralExpressionFormatter } from './literal-expression.fmt';

test('literal expression', () => {
  const code = '1  ';
  const tree = parseExpression<LiteralExpressionTree>(code);
  const fmt = new LiteralExpressionFormatter(tree);
  expect(fmt.formattedCode()).toBe('1');
});
