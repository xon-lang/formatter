import { TypeTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export abstract class TypeFormatter extends BaseFormatter {
  tree: TypeTree;
}
