import { AddExpressionTree, parseExpression } from '@xon/ast';
import { AddExpressionFormatter } from './add-expression.fmt';

test('add expression', () => {
  const code = '1    + 1';
  const tree = parseExpression<AddExpressionTree>(code);
  const formatter = new AddExpressionFormatter(tree);
  expect(formatter.formattedCode()).toBe('1 + 1');
});
