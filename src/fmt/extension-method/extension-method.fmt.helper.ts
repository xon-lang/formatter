import { ExtensionMethodTree, parseExtensionMethod } from '@xon/ast';
import { ExtensionMethodFormatter } from './extension-method.fmt';

export function getExtensionMethodFormatter(tree: ExtensionMethodTree): ExtensionMethodFormatter {
  if (tree === undefined) return undefined;

  return new ExtensionMethodFormatter(tree);
}

export function formatExtensionMethodTree(tree: ExtensionMethodTree): string {
  return getExtensionMethodFormatter(tree).formattedCode();
}

export function formatExtensionMethodCode(code: string): string {
  return formatExtensionMethodTree(parseExtensionMethod(code));
}
