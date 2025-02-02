import { convertToObject } from '../../../src/utils/json.js';
import { assert, test } from '../../helpers/testing.js';

test('utils | json | convert-to-object', function () {
  const devDependencies = new Map([
    ['@embroider/compat', '^2.1.1'],
    ['@embroider/core', '^2.1.1'],
    ['@glint/core', '^v1.0.0-beta.4'],
    ['@glint/environment-ember-loose', '^v1.0.0-beta.4'],
    ['@glint/template', '^v1.0.0-beta.4'],
    ['ember-css-modules', '^2.0.1'],
    ['typescript', '^5.0.3'],
  ]);

  const expectedValue = {
    '@embroider/compat': '^2.1.1',
    '@embroider/core': '^2.1.1',
    '@glint/core': '^v1.0.0-beta.4',
    '@glint/environment-ember-loose': '^v1.0.0-beta.4',
    '@glint/template': '^v1.0.0-beta.4',
    'ember-css-modules': '^2.0.1',
    typescript: '^5.0.3',
  };

  assert.deepEqual(convertToObject(devDependencies), expectedValue);
});
