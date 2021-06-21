import { ModuleTree, parseModule } from '@xon/ast';
import { ModuleFormatter } from './module.fmt';

export function getModuleFormatter(tree: ModuleTree): ModuleFormatter {
  if (tree === undefined) return undefined;

  return new ModuleFormatter(tree);
}

export function formatModuleTree(tree: ModuleTree): string {
  return getModuleFormatter(tree).formattedCode();
}

export function formatModuleCode(code: string): string {
  return formatModuleTree(parseModule(code));
}
