import Zonemaster from '../src/';
import config from '../test-config.js';

describe('Throws an error', () => {
  test('with invalid backend URL', () => {
    const invalidBackend = new Zonemaster(config.invalidBackendUrl);
    expect.assertions(1);
    return expect(invalidBackend.versionInfo()).rejects.toBeDefined();
  });
});
