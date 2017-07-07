import Zonemaster from '../src';
import config from '../test-config.js';

describe('Gets data from parent zone', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('more than zero NSs and DSs for a domain with DNSSSEC', async () => {
    expect.assertions(3);
    const data = await backend.getDataFromParentZone(config.domains.withDNSSEC);
    expect(data).toBeDefined();
    expect(data['ns_list'].length).toBeGreaterThan(0);
    expect(data['ds_list'].length).toBeGreaterThan(0);
  });

  test('more than zero NSs and zero DSs for a domain without DNSSSEC', async () => {
    expect.assertions(3);
    const data = await backend.getDataFromParentZone(
      config.domains.withoutDNSSEC
    );
    expect(data).toBeDefined();
    expect(data['ns_list'].length).toBeGreaterThan(0);
    expect(data['ds_list'].length).toBe(0);
  });

  test('error message for a non-existing domain', async () => {
    expect.assertions(2);
    const data = await backend.getDataFromParentZone(
      config.domains.nonexisting
    );
    expect(data).toBeDefined();
    expect(data.error).toBeDefined();
  });

  test('error message for an unallowed domain', async () => {
    expect.assertions(1);
    const data = await backend.getDataFromParentZone(config.domains.unallowed);
    expect(data.error).toBeDefined();
  });
});
