import { ArgumentTree, parseArgument } from '@xon/ast';
import { ArgumentFormatter } from './argument.fmt';

export function getArgumentFormatter(tree: ArgumentTree): ArgumentFormatter {
  if (tree === undefined) return undefined;

  return new ArgumentFormatter(tree);
}

export function formatArgumentTree(tree: ArgumentTree): string {
  return getArgumentFormatter(tree).formattedCode();
}

export function formatArgumentCode(code: string): string {
  const tree = parseArgument(code);
  return getArgumentFormatter(tree).formattedCode();
}
