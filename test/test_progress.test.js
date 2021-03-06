import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/test_progress.mock.js';

describe('Gets test progress', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('returns 100 (%) for a finished test', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(3);
    const data = await backend.testProgress(config.testIds.finished);
    expect(data).toBeDefined();
    expect(data.progress).toBeDefined();
    expect(data.progress).toEqual(100);
  });

  test('returns an error for a non-existing test', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(4);
    const data = await backend.testProgress(config.testIds.nonexisting);
    expect(data).toBeDefined();
    expect(data.progress).toBeUndefined();
    expect(data.error).toBeDefined();
    expect(data.error).toEqual('Test not found.');
  });

  test('returns an error for an invalid test ID', async () => {
    expect.assertions(4);
    const data = await backend.testProgress(config.testIds.invalid);
    expect(data).toBeDefined();
    expect(data.progress).toBeUndefined();
    expect(data.error).toBeDefined();
    expect(data.error).toEqual('Invalid test ID.');
  });
});
