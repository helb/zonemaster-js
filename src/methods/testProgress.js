import rpc from '../utils/jsonrpc';

/**
* Get test progress percentage. Async method.
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-test_progress
*
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
export default async function testProgress(testId) {
  if (!this.validateTestID(testId)) {
    return { error: 'Invalid test ID.' };
  }

  const response = await rpc(this.config.backendUrl, 'test_progress', testId);

  if (typeof response !== 'number') {
    return { error: 'Test not found.' };
  }

  return { progress: response };
}
