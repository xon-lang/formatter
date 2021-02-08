import { ExpressionTree } from '@xon/ast';
import { BaseFormatter } from '../base.fmt';

export abstract class ExpressionFormatter extends BaseFormatter {
  tree: ExpressionTree;
}
