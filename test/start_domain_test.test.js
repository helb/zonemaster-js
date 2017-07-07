import Zonemaster from '../src/';
import config from '../test-config.js';

describe('Starts a new test', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('with just a domain name', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({ id: null, jsonrpc: '2.0', result: '7e5f02f0e433fe20' })
      );
    }
    expect.assertions(3);
    const data = await backend.startDomainTest(config.domains.default);
    expect(data).toBeDefined();
    expect(data.id).toBeDefined();
    expect(data.id.length).toEqual(16);
  });

  test('with default parameters', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({ id: null, jsonrpc: '2.0', result: '7e5f02f0e433fe20' })
      );
    }
    expect.assertions(3);
    const data = await backend.startDomainTest({
      domain: config.domains.default
    });
    expect(data).toBeDefined();
    expect(data.id).toBeDefined();
    expect(data.id.length).toEqual(16);
  });

  test('with advanced parameters', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(
        JSON.stringify({ id: null, jsonrpc: '2.0', result: '7e5f02f0e433fe20' })
      );
    }
    expect.assertions(3);
    const data = await backend.startDomainTest({
      domain: config.domains.default,
      ipv6: true,
      priority: 1
    });
    expect(data).toBeDefined();
    expect(data.id).toBeDefined();
    expect(data.id.length).toEqual(16);
  });

  test('returns an error when called without a domain name', async () => {
    expect.assertions(4);
    const data = await backend.startDomainTest({});
    expect(data).toBeDefined();
    expect(data.if).toBeUndefined();
    expect(data.error).toBeDefined();
    expect(data.error).toEqual('Domain name required.');
  });
});
