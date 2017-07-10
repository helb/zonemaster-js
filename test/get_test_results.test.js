import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/get_test_results.mock.js';

describe('Gets test result', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('returns result for a finished test', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(4);
    const data = await backend.testResult(config.testIds.finished);
    expect(data).toBeDefined();
    expect(data.params).toBeDefined();
    expect(data.results).toBeDefined();
    expect(data.results.length).toBeGreaterThan(0);
  });

  test('returns an error for a non-existing test', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(4);
    const data = await backend.testResult(config.testIds.nonexisting);
    expect(data).toBeDefined();
    expect(data.results).toBeUndefined();
    expect(data.params).toBeUndefined();
    expect(data.error).toBeDefined();
  });

  test('returns an error for an invalid test ID', async () => {
    expect.assertions(5);
    const data = await backend.testResult(config.testIds.invalid);
    expect(data).toBeDefined();
    expect(data.results).toBeUndefined();
    expect(data.params).toBeUndefined();
    expect(data.error).toBeDefined();
    expect(data.error).toEqual('Invalid test ID.');
  });
});
