import { LoopStatementTree, parseStatement } from '@xon/ast';
import { LoopStatementFormatter } from './loop-statement.fmt';

test('loop infinity', () => {
  const code = 'loop  :  \n    2  +2  ';
  const tree = parseStatement<LoopStatementTree>(code);
  const fmt = new LoopStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('loop:\n    2 + 2');
});

test('loop over value', () => {
  const code = 'loop    x:  \n    2  +2  ';
  const tree = parseStatement<LoopStatementTree>(code);
  const fmt = new LoopStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('loop x:\n    2 + 2');
});

test('loop value', () => {
  const code = 'loop  v  in  x:  \n    2  +2  ';
  const tree = parseStatement<LoopStatementTree>(code);
  const fmt = new LoopStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('loop v in x:\n    2 + 2');
});

test('loop value, key', () => {
  const code = 'loop  v ,   k  in  x:  \n    2  +2  ';
  const tree = parseStatement<LoopStatementTree>(code);
  const fmt = new LoopStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('loop v, k in x:\n    2 + 2');
});

test('loop value, key, index', () => {
  const code = 'loop  v ,   k  ,i  in  x:  \n    2  +2  ';
  const tree = parseStatement<LoopStatementTree>(code);
  const fmt = new LoopStatementFormatter(tree);
  expect(fmt.formattedCode()).toBe('loop v, k, i in x:\n    2 + 2');
});
