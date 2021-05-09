import { parseProgram, ProgramTree } from '@xon/ast';
import { ProgramFormatter } from './program.fmt';

export function getProgramFormatter(tree: ProgramTree): ProgramFormatter {
  if (tree === undefined) return undefined;

  return new ProgramFormatter(tree);
}

export function formatProgramTree(tree: ProgramTree): string {
  return getProgramFormatter(tree).formattedCode();
}

export function formatProgramCode(code: string): string {
  return getProgramFormatter(parseProgram(code)).formattedCode();
}
