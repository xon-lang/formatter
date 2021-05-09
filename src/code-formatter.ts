import { formatProgramCode } from './fmt/program/program.fmt.helper';
import { config as cfg, FormatterConfig } from './formatter-config';

export function formatCode(code: string, config?: Partial<FormatterConfig>) {
  Object.assign(cfg, config);
  return formatProgramCode(code);
}
