import { LiteralTree, parseLiteral } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export abstract class LiteralFormatter<T extends LiteralTree<unknown>> extends BaseFormatter {
  tree: T;

  constructor(protected code: string) {
    super(code);
    this.tree = parseLiteral<T>(this.code);
  }
}
