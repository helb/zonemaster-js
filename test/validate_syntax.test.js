import Zonemaster from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/validate_syntax.mock.js';

describe('Validates test config syntax', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('with just a domain name', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(2);
    const data = await backend.validateSyntax(config.domains.default);
    expect(data).toBeDefined();
    expect(data.ok).toEqual(true);
  });

  test('with default parameters', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(2);
    const data = await backend.validateSyntax({
      domain: config.domains.default
    });
    expect(data).toBeDefined();
    expect(data.ok).toEqual(true);
  });

  test('with advanced parameters', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(2);
    const data = await backend.validateSyntax({
      domain: config.domains.default,
      ipv6: true,
      priority: 1
    });
    expect(data).toBeDefined();
    expect(data.ok).toEqual(true);
  });

  test('with invalid domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(2);
    const data = await backend.validateSyntax({
      domain: config.domains.nonexisting
    });
    expect(data).toBeDefined();
    expect(data.ok).toEqual(false);
  });

  test('throws an error when called without a domain name', () => {
    expect.assertions(1);
    expect(backend.validateSyntax({})).rejects.toBeDefined();
  });
});
