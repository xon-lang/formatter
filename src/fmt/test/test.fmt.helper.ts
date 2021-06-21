import { parseTest, TestTree } from '@xon/ast';
import { TestFormatter } from './test.fmt';

export function getTestFormatter(tree: TestTree): TestFormatter {
  if (tree === undefined) return undefined;

  return new TestFormatter(tree);
}

export function formatTestTree(tree: TestTree): string {
  return getTestFormatter(tree).formattedCode();
}

export function formatTestCode(code: string): string {
  return formatTestTree(parseTest(code));
}
