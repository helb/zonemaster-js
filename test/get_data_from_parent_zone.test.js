import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/get_data_from_parent_zone.mock.js';

describe('Gets data from parent zone', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('more than zero NSs and DSs for a domain with DNSSSEC', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(3);
    const data = await backend.dataFromParentZone(config.domains.withDNSSEC);
    expect(data).toBeDefined();
    expect(data.ns_list.length).toBeGreaterThan(0);
    expect(data.ds_list.length).toBeGreaterThan(0);
  });

  test('more than zero NSs and zero DSs for a domain without DNSSSEC', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(3);
    const data = await backend.dataFromParentZone(
      config.domains.withoutDNSSEC
    );
    expect(data).toBeDefined();
    expect(data.ns_list.length).toBeGreaterThan(0);
    expect(data.ds_list.length).toBe(0);
  });

  test('error message for a non-existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock3));
    }
    expect.assertions(3);
    const data = await backend.dataFromParentZone(
      config.domains.nonexisting
    );
    expect(data).toBeDefined();
    expect(data.error).toBeDefined();
    expect(data.error).toEqual('Domain does not exist.');
  });

  test('error message for an unallowed domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock4));
    }
    expect.assertions(2);
    const data = await backend.dataFromParentZone(config.domains.unallowed);
    expect(data).toBeDefined();
    expect(data.error).toBeDefined();
  });
});
