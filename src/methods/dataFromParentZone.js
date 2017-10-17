import rpc from '../utils/jsonrpc';

/**
* Get domain data from it's parent zone. Async method.
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone
*
* @param {String} domain - Domain name.
*
* @example
* zm.dataFromParentZone('nic.cz')
* // → {'ns_list': […], 'ds_list': […]}
* zm.dataFromParentZone('does-not-exist.cz')
* // → {'error': 'Domain does not exist.'}
* zm.dataFromParentZone('.cz')
* // → {'error': 'Domain name name or label outside allowed length'} -- error message from backend
*
* @returns {Object}  data
* @returns {Array}   data.ns_list - See backend docs.
* @returns {Array}   data.ds_list - See backend docs.
* @returns {String}  data.error   - Returns an error message when both ns_list and ds_list are empty or when the backend responds with an error message.
*/
export default async function dataFromParentZone(domain) {
  const response = await rpc(this.config.backendUrl, 'get_data_from_parent_zone', domain);

  if (response.status === 'nok') {
    return { error: response.message };
  } else if (response.ns_list.length === 0 && response.ds_list.length === 0) {
    return { error: 'Domain does not exist.' };
  }

  return response;
}
