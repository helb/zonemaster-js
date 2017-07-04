import rpc from './jsonrpc';

/**
 * Interface to the Zonemaster backend.
 */
export default class Zonemaster {
  /**
  * @param backendUrl Zonemaster backend URL, including protocol
  */
  constructor(backendUrl) {
    this.config = {
      backendUrl
    };
  }

  /**
  * Get Zonemaster's backend and engine version.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-version_info
  * @returns {Object} data
  * @returns {string} data.zonemaster_backend
  * @returns {string} data.zonemaster_engine
  */
  async versionInfo() {
    return await rpc(this.config.backendUrl, 'version_info');
  }

  /**
  * Get domain data from it's parent zone.
  * API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone
  * @param {string} domain Domain name.
  * @returns {Object} data
  * @returns {Array} data.ns_list See backend docs.
  * @returns {Array} data.ds_list See backend docs.
  * @returns {string} data.error Return an error message when both ns_list and ds_list are empty or when the backend responds with an error message.
  */
  async getDataFromParentZone(domain) {
    let response = await rpc(this.config.backendUrl, 'get_data_from_parent_zone', domain);

    if (response.status === "nok") {
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
  * @param {string} domain Domain name.
  * @returns {Object} data
  * @returns {Array} data.nameservers Nameserver IPs, both IPv4 and IPv6
  * @returns {string} data.error Return an error when no nameservers are found (backend returns 0.0.0.0)
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
