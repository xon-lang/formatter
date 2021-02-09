import { parseDefinition } from '@xon/ast';
import { config } from '../../formatter-config';
import { DefinitionFormatter } from './definition.fmt';

test('definition', () => {
  const code = 'Real  is   Float : \n    prop   Integer  ';
  const tree = parseDefinition(code);
  const fmt = new DefinitionFormatter(tree);
  expect(fmt.formattedCode()).toBe(`Real is Float:${config.newLine}${config.tab()}prop Integer`);
});

test('another definition', () => {
  const code = `Class:
    mu (k Integer, b Number) String:
        l + d`;
  const tree = parseDefinition(code);
  const fmt = new DefinitionFormatter(tree);
  expect(fmt.formattedCode()).toBe(
    `Class:
    mu (k Integer, b Number) String:
        l + d`
  );
});
