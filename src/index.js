import rpc from './jsonrpc';

/**
 * Interface to the Zonemaster backend.
 * @param backendUrl Zonemaster backend URL, including protocol
 *
 * @example
 * const zm = new Zonemaster('http://localhost:5000/')
 */
export default class Zonemaster {
  constructor(backendUrl) {
    this.config = {
      backendUrl
    };
  }

  /**
  * Validate test ID with a simple regex.
  *
  * @param {String} testId
  *
  * @example
  * zm.validateTestID('abdf123456789012')
  * // → true
  * zm.validateTestID('foo')
  * // → false
  *
  * @returns {Boolean}
  */
  static validateTestID(testId) {
    return /[a-f0-9]{16}/.test(testId);
  }

  /**
  * Get Zonemaster's backend and engine version.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-version_info
  *
  * @example
  * zm.versionInfo()
  * // → {'zonemaster_backend': '…', 'zonemaster_engine': '…'}
  *
  * @returns {Object} data
  * @returns {String} data.zonemaster_backend
  * @returns {String} data.zonemaster_engine
  */
  async versionInfo() {
    return rpc(this.config.backendUrl, 'version_info');
  }

  /**
  * Get domain data from it's parent zone.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone
  * @param {String} domain - Domain name.
  *
  * @example
  * zm.getDataFromParentZone('nic.cz')
  * // → {'ns_list': […], 'ds_list': […]}
  * zm.getDataFromParentZone('does-not-exist.cz')
  * // → {'error': 'Domain does not exist.'}
  * zm.getDataFromParentZone('.cz')
  * // → {'error': 'Domain name name or label outside allowed length'} -- error message from backend
  *
  * @returns {Object}  data
  * @returns {Array}   data.ns_list - See backend docs.
  * @returns {Array}   data.ds_list - See backend docs.
  * @returns {String}  data.error   - Returns an error message when both ns_list and ds_list are empty or when the backend responds with an error message.
  */
  async getDataFromParentZone(domain) {
    const response = await rpc(
      this.config.backendUrl,
      'get_data_from_parent_zone',
      domain
    );

    if (response.status === 'nok') {
      return { error: response.message };
    } else if (
      response.ns_list.length === 0 &&
      response.ds_list.length === 0
    ) {
      return { error: 'Domain does not exist.' };
    }

    return response;
  }

  /**
  * Get nameservers for a domain.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_ns_ips
  * @param   {String} domain - Domain name.
  *
  * @example
  * zm.getNameserverIPs('nic.cz')
  * // → {'nameservers': […]}
  * zm.getNameserverIPs('does-not-exist.cz')
  * // → {error: 'No A or AAAA records found.'}
  *
  * @returns {Object} data
  * @returns {Array}  data.nameservers - Nameserver IPs, both IPv4 and IPv6
  * @returns {String} data.error       - Returns an error when no nameservers are found (backend returned 0.0.0.0, see their docs)
  */
  async getNameserverIPs(domain) {
    const nameservers = [];
    const response = await rpc(this.config.backendUrl, 'get_ns_ips', domain);

    response.forEach((ns) => {
      nameservers.push(Object.values(ns)[0]);
    });

    if (nameservers.includes('0.0.0.0')) {
      return { error: 'No A or AAAA records found.' };
    }

    return { nameservers };
  }

  /**
  * Start a new domain test.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-start_domain_test
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
  async startDomainTest(config) {
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

  /**
  * Get test progress percentage.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-test_progress
  * @param   {String} id - Test ID (as returned from the startDomainTest method)
  *
  * @example
  * zm.testProgress('abdf123456789012')
  * // → {progress: 80}
  * zm.testProgress('foo')
  * // → {error: 'Invalid test ID.'}
  * zm.testProgress('1234567890123456')
  * // → {error: 'Test not found.'}
  *
  * @returns {Object} data
  * @returns {Number} data.progress - Test progress percentage
  * @returns {String} data.error    - Returns an error message for an invalid ID format or when the test wasn't found.
  */
  async testProgress(testId) {
    if (!this.constructor.validateTestID(testId)) {
      return { error: 'Invalid test ID.' };
    }

    const response = await rpc(this.config.backendUrl, 'test_progress', testId);

    if (typeof response !== 'number') {
      return { error: 'Test not found.' };
    }

    return { progress: response };
  }
}
