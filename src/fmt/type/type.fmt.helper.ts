import { parseType, TypeTree } from '@xon/ast';

export function formatTypeTree(tree: TypeTree): string {
  return tree.toString();
}

export function formatTypeCode(code: string): string {
  return formatTypeTree(parseType(code));
}
