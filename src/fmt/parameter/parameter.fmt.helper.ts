import { ParameterTree, parseParameter } from '@xon/ast';
import { ParameterFormatter } from './parameter.fmt';

export function getParameterFormatter(tree: ParameterTree): ParameterFormatter {
  if (tree === undefined) return undefined;

  return new ParameterFormatter(tree);
}

export function formatParameterTree(tree: ParameterTree): string {
  return getParameterFormatter(tree).formattedCode();
}

export function formatParameterCode(code: string): string {
  return formatParameterTree(parseParameter(code));
}
