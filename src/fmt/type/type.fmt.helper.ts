import { parseType, TypeTree } from '@xon/ast';
import { TypeFormatter } from './type.fmt';

export function getTypeFormatter(tree: TypeTree): TypeFormatter {
  if (tree === undefined) return undefined;

  return new TypeFormatter(tree);
}

export function formatTypeTree(tree: TypeTree): string {
  return getTypeFormatter(tree).formattedCode();
}

export function formatTypeCode(code: string): string {
  const tree = parseType(code);
  return getTypeFormatter(tree).formattedCode();
}
