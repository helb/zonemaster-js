import Zonemaster from '../src/';
import config from '../test-config.js';

describe('Gets nameserver IPs', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('more than zero nameservers for an existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({
          id: 2,
          jsonrpc: '2.0',
          result: [
            { 'nic.cz': '2001:1488:0:3::2' },
            { 'nic.cz': '217.31.205.50' }
          ]
        })
      );
    }
    expect.assertions(2);
    const data = await backend.getNameserverIPs(config.domains.default);
    expect(data).toBeDefined();
    expect(data.nameservers.length).toBeGreaterThan(0);
  });

  test('returns an error for a non-existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({ jsonrpc: '2.0', result: [{ _: '0.0.0.0' }], id: 2 })
      );
    }
    expect.assertions(1);
    const data = await backend.getNameserverIPs(config.domains.nonexisting);
    expect(data.error).toBeDefined();
  });
});
