import Zonemaster from '../src';
import config from '../test-config.js';

describe('Gets backend version info', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('…', async () => {
    expect.assertions(3);
    const data = await backend.versionInfo();
    expect(data).toBeDefined();
    expect(data['zonemaster_backend']).toBeDefined();
    expect(data['zonemaster_engine']).toBeDefined();
  });
});
