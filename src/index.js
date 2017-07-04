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
    return await rpc(this.config.backendUrl, 'version_info');
  }

  /**
  * Get domain data from it's parent zone.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone
  * @param {String} domain Domain name.
  *
  * @example
  * zm.getDataFromParentZone('nic.cz')
  * // → {'ns_list': […], 'ds_list': […]}
  * zm.getDataFromParentZone('does-not-exist.cz')
  * // → {'error': 'Domain does not exist.'}
  * zm.getDataFromParentZone('.cz')
  * // → {'error': 'Domain name name or label outside allowed length'} -- error message from backend
  *
  * @returns {Object} data
  * @returns {Array} data.ns_list - See backend docs.
  * @returns {Array} data.ds_list - See backend docs.
  * @returns {String} data.error Returns an error message when both ns_list and ds_list are empty or when the backend responds with an error message.
  */
  async getDataFromParentZone(domain) {
    let response = await rpc(this.config.backendUrl, 'get_data_from_parent_zone', domain);

    if (response.status === 'nok') {
      return {error: response.message};
    } else if (response['ns_list'].length === 0 && response['ds_list'].length === 0) {
      return {error: 'Domain does not exist.'};
    } else {
      return response;
    }
  }

  /**
  * Get nameservers for a domain.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_ns_ips
  * @param {String} domain Domain name.
  *
  * @example
  * zm.getNameserverIPs('nic.cz')
  * // → {'nameservers': […]}
  * zm.getNameserverIPs('does-not-exist.cz')
  * // → {error: 'No A or AAAA records found.'}
  *
  * @returns {Object} data
  * @returns {Array} data.nameservers - Nameserver IPs, both IPv4 and IPv6
  * @returns {String} data.error - Returns an error when no nameservers are found (backend returned 0.0.0.0, see their docs)
  */
  async getNameserverIPs(domain) {
    let nameservers = [];
    let response = await rpc(this.config.backendUrl, 'get_ns_ips', domain);

    response.forEach((ns) => {
      nameservers.push(Object.values(ns)[0]);
    });

    if (nameservers.includes('0.0.0.0')) {
      return {error: 'No A or AAAA records found.'};
    } else {
      return {nameservers};
    }
  }
}
