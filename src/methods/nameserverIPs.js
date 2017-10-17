import rpc from '../utils/jsonrpc';

/**
* Get nameservers for a domain. Async method.
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_ns_ips
*
* @param   {String} domain - Domain name.
*
* @example
* zm.nameserverIPs('nic.cz')
* // → {'nameservers': […]}
* zm.nameserverIPs('does-not-exist.cz')
* // → {error: 'No A or AAAA records found.'}
*
* @returns {Object} data
* @returns {Array}  data.nameservers - Nameserver IPs, both IPv4 and IPv6
* @returns {String} data.error       - Returns an error when no nameservers are found (backend returned 0.0.0.0, see their docs)
*/
export default async function nameserverIPs(domain) {
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
