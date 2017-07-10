export default {
  mock1: {
    // more than zero nameservers for an existing domain
    id: 2,
    jsonrpc: '2.0',
    result: [{ 'nic.cz': '2001:1488:0:3::2' }, { 'nic.cz': '217.31.205.50' }]
  },
  mock2: {
    // returns an error for a non-existing domain
    jsonrpc: '2.0',
    result: [{ _: '0.0.0.0' }],
    id: 2
  }
};
