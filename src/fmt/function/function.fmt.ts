import { FunctionTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatParameterTree } from '../parameter/parameter.fmt.helper';
import { formatStatementTree } from '../statement/statement.fmt.helper';
import { formatTypeTree } from '../type/type.fmt.helper';

export class FunctionFormatter extends BaseFormatter {
  tree: FunctionTree;

  formattedCode(): string {
    const name = this.tree.name;
    const declaredGenerics = this.tree.declaredGenerics.length
      ? '<' + this.tree.declaredGenerics.join(', ') + '>'
      : '';
    const parameters = this.tree.parameters.map((x) => formatParameterTree(x)).join(', ');
    const returnType = formatTypeTree(this.tree.returnType);
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `${name}${declaredGenerics}(${parameters}) ${returnType}:${config.nl}${config.indent(
      body
    )}`;
  }
}
