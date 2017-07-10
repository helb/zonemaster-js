import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/get_ns_ips.mock.js';

describe('Gets nameserver IPs', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('more than zero nameservers for an existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(2);
    const data = await backend.nameserverIPs(config.domains.default);
    expect(data).toBeDefined();
    expect(data.nameservers.length).toBeGreaterThan(0);
  });

  test('returns an error for a non-existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(1);
    const data = await backend.nameserverIPs(config.domains.nonexisting);
    expect(data.error).toBeDefined();
  });
});
