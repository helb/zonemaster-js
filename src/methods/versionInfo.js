import rpc from '../jsonrpc';

/**
* Get Zonemaster's backend and engine version. Async method.
*
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
export default async function versionInfo() {
  return rpc(this.config.backendUrl, 'version_info');
}
