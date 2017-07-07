export default {
  backendUrl: 'http://217.31.192.51:5000/',
  useRealBackend: true,
  domains: {
    default: 'nic.cz',
    withDNSSEC: 'nic.cz',
    withoutDNSSEC: 'nic.sk',
    unallowed: '.cz',
    nonexisting: '_'
  }
};
