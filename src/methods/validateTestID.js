/**
* Validate test ID with a simple regex.
*
* @param {String} testId
*
* @example
* zm.validateTestID('abdf123456789012')
* // → true
* zm.validateTestID('foo')
* // → false
*
* @returns {Boolean}
*/
export default function validateTestID(testId) {
  return /[a-f0-9]{16}/.test(testId);
}
