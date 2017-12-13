import 'isomorphic-fetch';

const config = {
  backendUrl: 'https://zonemaster.labs.nic.cz/backend/',
  invalidBackendUrl: 'http://localhost:0/',
  useRealBackend: false,
  domains: {
    default: 'nic.cz',
    withDNSSEC: 'nic.cz',
    withoutDNSSEC: 'nic.sk',
    unallowed: '.cz',
    nonexisting: '_'
  },
  testIds: {
    finished: '2499e68a5e11234a',
    nonexisting: 'abdf123456789012',
    invalid: 'foo'
  }
};

if (!config.useRealBackend) {
  /* eslint global-require: 0 */
  global.fetch = require('jest-fetch-mock');
}

export default config;
