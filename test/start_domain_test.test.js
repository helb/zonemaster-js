import Zonemaster from '../src';
import config from '../test-config.js';

describe('Starts a new test', () => {
  const backend = new Zonemaster(config.backendUrl);

  test('with just a domain name', async () => {
    expect.assertions(3);
    const data = await backend.startDomainTest(config.domains.default);
    expect(data).toBeDefined();
    expect(data['id']).toBeDefined();
    expect(data['id'].length).toEqual(16);
  });

  test('with default parameters', async () => {
    expect.assertions(3);
    const data = await backend.startDomainTest({
      domain: config.domains.default
    });
    expect(data).toBeDefined();
    expect(data['id']).toBeDefined();
    expect(data['id'].length).toEqual(16);
  });

  test('with advanced parameters', async () => {
    expect.assertions(3);
    const data = await backend.startDomainTest({
      domain: config.domains.default,
      ipv6: true,
      priority: 1
    });
    expect(data).toBeDefined();
    expect(data['id']).toBeDefined();
    expect(data['id'].length).toEqual(16);
  });
});