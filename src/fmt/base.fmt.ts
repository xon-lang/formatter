import { BaseTree } from '@xon/ast';

export abstract class BaseFormatter {
  constructor(public tree: BaseTree) {}

  abstract formattedCode(): string;
}
