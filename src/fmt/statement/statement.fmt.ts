import { StatementTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export abstract class StatementFormatter extends BaseFormatter {
  tree: StatementTree;
}
