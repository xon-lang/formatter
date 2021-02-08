import { parseDefinition } from '@xon/ast';
import { config } from '../../formatter-config';
import { DefinitionFormatter } from './definition.fmt';

test('program', () => {
  const code = 'Real  is   Float : \n    prop   Integer  ';
  const tree = parseDefinition(code);
  const fmt = new DefinitionFormatter(tree);
  expect(fmt.formattedCode()).toBe(
    `Real is Float:${config.newLine}${config.tabSpaces}prop Integer`
  );
});
