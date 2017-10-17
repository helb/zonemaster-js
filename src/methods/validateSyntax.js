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
* @example
* zm.validateSyntax('nic.cz')
* // → {ok: true, message: 'Syntax ok'}
* zm.validateSyntax({domain: 'nic.cz', ipv4: false, ipv6: true})
* // → {ok: true, message: 'Syntax ok'}
* zm.validateSyntax('_')
* // → {ok: false, message: 'Invalid domain.'}
* zm.validateSyntax('háčkyčárky.cz')
* // → {ok: false, message: 'Domain name contains non-ascii characters and IDN conversion is not installed'}
* // (domain is valid, but didn't pass backend validation)
*
* @returns {Object} data
* @returns {Boolean} data.ok
* @returns {String} data.message   - Human readable message from the backend
*/
export default async function validateSyntax(config) {
  try {
    const testConfig = configFromDomainName(config);
    const response = await rpc(this.config.backendUrl, 'validate_syntax', testConfig);
    const domainIsValid = validateDomain(testConfig.domain);
    return {
      ok: response.status === 'ok' && domainIsValid,
      message: domainIsValid ? response.message : 'Invalid domain.'
    };
  } catch (error) {
    throw error;
  }
}
