export default {
  mock1: {
    // returns 100 (%) for a finished test
    result: 100,
    jsonrpc: '2.0',
    id: null
  },
  mock2: {
    // returns an error for a non-existing test
    result: null,
    jsonrpc: '2.0',
    id: null
  }
};
