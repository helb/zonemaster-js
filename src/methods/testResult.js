import rpc from '../utils/jsonrpc';

/**
* Get test result. Async method.
*
* API method: https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_test_results
*
* @param   {String} id - Test ID (as returned from the startDomainTest method)
*
* @returns {Object} data
* @returns {String} data.error    - Returns an error message for an invalid ID format or when the test wasn't found.
*/
export default async function testResult(testId) {
  if (!this.validateTestID(testId)) {
    return { error: 'Invalid test ID.' };
  }

  const response = await rpc(this.config.backendUrl, 'get_test_results', { id: testId });

  // console.log(response);

  return response;
}
