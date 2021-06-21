import { formatModuleCode } from './fmt/module/module.fmt.helper';
import { config as cfg, FormatterConfig } from './formatter-config';

export function formatCode(code: string, config?: Partial<FormatterConfig>) {
  Object.assign(cfg, config);
  return formatModuleCode(code);
}
