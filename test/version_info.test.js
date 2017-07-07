import Zonemaster from '../src/';
import config from '../test-config.js';

describe('Gets backend version info', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('…', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({
          id: '1',
          result: {
            zonemaster_engine: 'v1.0.16',
            zonemaster_backend: '1.1.0'
          },
          jsonrpc: '2.0'
        })
      );
    }
    expect.assertions(3);
    const data = await backend.versionInfo();
    expect(data).toBeDefined();
    expect(data.zonemaster_backend).toBeDefined();
    expect(data.zonemaster_engine).toBeDefined();
  });
});
