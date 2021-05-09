import { FunctionTree, parseFunction } from '@xon/ast';
import { FunctionFormatter } from './function.fmt';

export function getFunctionFormatter(tree: FunctionTree): FunctionFormatter {
  if (tree === undefined) return undefined;

  return new FunctionFormatter(tree);
}

export function formatFunctionTree(tree: FunctionTree): string {
  return getFunctionFormatter(tree).formattedCode();
}

export function formatFunctionCode(code: string): string {
  return formatFunctionTree(parseFunction(code));
}
