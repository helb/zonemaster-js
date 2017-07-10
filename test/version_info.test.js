import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/version_info.mock.js';

describe('Gets backend version info', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('…', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(3);
    const data = await backend.versionInfo();
    expect(data).toBeDefined();
    expect(data.zonemaster_backend).toBeDefined();
    expect(data.zonemaster_engine).toBeDefined();
  });
});
