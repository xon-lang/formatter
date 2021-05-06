import { LiteralTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export abstract class LiteralFormatter extends BaseFormatter {
  public tree: LiteralTree;
}
