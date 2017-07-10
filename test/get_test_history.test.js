import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/get_test_history.mock.js';

describe('Gets test history', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('returns results for an existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(3);
    const data = await backend.testHistory(config.domains.default);
    expect(data).toBeDefined();
    expect(data.results).toBeDefined();
    expect(data.results.length).toBeGreaterThan(0);
  }, 20000); // increased timeout, because the backend is really slow with this…

  test('returns an empty array for a non-existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(3);
    const data = await backend.testHistory(config.domains.nonexisting);
    expect(data).toBeDefined();
    expect(data.results).toBeDefined();
    expect(data.results.length).toEqual(0);
  }, 20000); // increased timeout, because the backend is really slow with this…
});
