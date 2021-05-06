import { DefinitionTree, parseDefinition } from '@xon/ast';
import { DefinitionFormatter } from './definition.fmt';

export function getDefinitionFormatter(tree: DefinitionTree): DefinitionFormatter {
  if (tree === undefined) return undefined;

  return new DefinitionFormatter(tree);
}

export function formatDefinitionTree(tree: DefinitionTree): string {
  return getDefinitionFormatter(tree).formattedCode();
}

export function formatDefinitionCode(code: string): string {
  return getDefinitionFormatter(parseDefinition(code)).formattedCode();
}
