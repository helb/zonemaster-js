import Zonemaster from '../src';
import config from "../test-config.js";

describe('Gets nameserver IPs', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('more than zero nameservers for an existing domain', async() => {
    expect.assertions(2);
    const data = await backend.getNameserverIPs(config.domains.default);
    expect(data).toBeDefined();
    expect(data.nameservers.length).toBeGreaterThan(0);
  });

  test('returns an error for a non-existing domain', async() => {
    expect.assertions(1);
    const data = await backend.getNameserverIPs(config.domains.nonexisting);
    expect(data.error).toBeDefined();
  });
});
