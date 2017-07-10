import Zonemaster from '../src/';
import config from '../test-config.js';

describe('Validates a test ID', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('returns true for a valid ID', () => {
    const data = backend.validateTestID(config.testIds.finished);
    expect(data).toEqual(true);
  });

  test('returns true for an invalid ID', () => {
    const data = backend.validateTestID(config.testIds.invalid);
    expect(data).toEqual(false);
  });
});
