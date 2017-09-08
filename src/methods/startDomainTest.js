import rpc from '../jsonrpc';

/**
* Start a new domain test. Async method.
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-start_domain_test
*
* @param {Object}   config             - A config object with domain and some advanced options
* @param {String}   config.domain      - Domain name, required
* @param {Object}   config.nameservers - Nameservers to use, optional, see backend docs
* @param {String}   config.profile     - Test profile to use, optional
* @param {Boolean}  config.ipv4        - Use IPv4, optional
* @param {Boolean}  config.ipv6        - Use IPv6, optional
* @param {Number}   config.priority    - Test priority, optional
* @param {String}   domain             - …or just a a domain name string
*
* @example
* zm.startDomainTest('nic.cz')
* zm.startDomainTest({domain: 'nic.cz', nameservers: {…}, ipv6: true})
*
* @returns {Object} data
* @returns {String} data.id - Test ID
*/
export default async function startDomainTest(config) {
  let testConfig;
  if (typeof config === 'string') {
    testConfig = { domain: config };
  } else if (typeof config.domain !== 'string') {
    return { error: 'Domain name required.' };
  } else {
    testConfig = config;
  }

  const response = await rpc(this.config.backendUrl, 'start_domain_test', testConfig);
  return { id: response };
}
