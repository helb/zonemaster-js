import rpc from '../utils/jsonrpc';
import configFromDomainName from '../utils/configFromDomainName';
import validateDomain from '../utils/validateDomain';

/**
* Checks the domain name and params for validity. Async method.
*
* Domain is checked against a regex, because the backend validation is not working properly…
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-validate_syntax
*
* @param {Object}   config         - A config object, same structure as in `startDomainTest`
*
* @returns {Object} data
* @returns {Boolean} data.ok
* @returns {String} data.message   - Human readable message from the backend
*/
export default async function validateSyntax(config) {
  const testConfig = configFromDomainName(config);
  try {
    const response = await rpc(this.config.backendUrl, 'validate_syntax', testConfig);
    return {
      ok: response.status === 'ok' && validateDomain(config.domain || config),
      message: response.message || 'Invalid domain.'
    };
  } catch (error) {
    throw error;
  }
}
