import { ParameterTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';
import { formatTypeTree } from '../type/type.fmt.helper';

export class ParameterFormatter extends BaseFormatter {
  tree: ParameterTree;

  formattedCode(): string {
    const name = this.tree.name;
    const type = formatTypeTree(this.tree.type);
    return `${name} ${type}`;
  }
}
