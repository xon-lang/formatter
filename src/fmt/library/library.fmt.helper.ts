import { LibraryTree, parseLibrary } from '@xon/ast';
import { LibraryFormatter } from './library.fmt';

export function getLibraryFormatter(tree: LibraryTree): LibraryFormatter {
  if (tree === undefined) return undefined;

  return new LibraryFormatter(tree);
}

export function formatLibraryTree(tree: LibraryTree): string {
  return getLibraryFormatter(tree).formattedCode();
}

export function formatLibraryCode(code: string): string {
  return formatLibraryTree(parseLibrary(code));
}
