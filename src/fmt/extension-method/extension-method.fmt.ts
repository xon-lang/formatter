import { ExtensionMethodTree } from '@xon/ast';
import { config } from '../../formatter-config';
import { BaseFormatter } from '../base.fmt';
import { formatParameterTree } from '../parameter/parameter.fmt.helper';
import { formatStatementTree } from '../statement/statement.fmt.helper';
import { formatTypeTree } from '../type/type.fmt.helper';

export class ExtensionMethodFormatter extends BaseFormatter {
  tree: ExtensionMethodTree;

  formattedCode(): string {
    const extensionType = formatTypeTree(this.tree.extensionType);
    const name = this.tree.name;
    const declaredGenerics = this.tree.declaredGenerics
      ? '<' + this.tree.declaredGenerics.join(', ') + '>'
      : '';
    const parameters = this.tree.parameters.map((x) => formatParameterTree(x)).join(', ');
    const returnType = formatTypeTree(this.tree.returnType);
    const body = this.tree.body.map((x) => formatStatementTree(x)).join(config.nl);

    return `${extensionType}.${name}${declaredGenerics}(${parameters}) ${returnType}:${
      config.nl
    }${config.indent(body)}`;
  }
}
