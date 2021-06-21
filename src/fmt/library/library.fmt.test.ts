import { formatLibraryCode } from './library.fmt.helper';

test('has name', () => {
  const code = 'xon .os  :   Application,  Environment   as   Env  ';
  expect(formatLibraryCode(code)).toBe('xon.os: Application, Environment as Env');
});
