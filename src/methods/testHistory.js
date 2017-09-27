import rpc from '../jsonrpc';

/**
* Get test history for a domain. Async method.
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_test_history
*
* @param   {String} domain - Domain name.
*
* @returns {Object} data
*/
export default async function testHistory(domain) {
  const response = await rpc(this.config.backendUrl, 'get_test_history', {
    frontend_params: { domain }
  });

  return { results: response };
}
