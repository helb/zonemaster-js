export default {
  mock1: {
    // more than zero NSs and DSs for a domain with DNSSSEC
    jsonrpc: '2.0',
    result: {
      ns_list: [
        { ns: 'a.ns.nic.cz', ip: '194.0.12.1' },
        { ip: '2001:678:f::1', ns: 'a.ns.nic.cz' },
        { ip: '194.0.13.1', ns: 'b.ns.nic.cz' },
        { ip: '2001:678:10::1', ns: 'b.ns.nic.cz' },
        { ip: '193.29.206.1', ns: 'd.ns.nic.cz' },
        { ip: '2001:678:1::1', ns: 'd.ns.nic.cz' }
      ],
      ds_list: [
        {
          keytag: 61281,
          digtype: 2,
          algorithm: 13,
          digest: '4104d40c8fe2030bf7a09a199fcf37b36f7ec8ddd16f5a84f2e61c248d3afd0f'
        }
      ]
    },
    id: null
  },
  mock2: {
    // more than zero NSs and zero DSs for a domain without DNSSSEC
    id: null,
    jsonrpc: '2.0',
    result: {
      ds_list: [],
      ns_list: [
        { ns: 'ns1.nic.sk', ip: '195.168.11.131' },
        { ns: 'ns2.nic.sk', ip: '217.73.17.16' },
        { ip: '2a01:390:1:0:226:9eff:fe02:7729', ns: 'ns2.nic.sk' },
        { ns: 'ns3.nic.sk', ip: '217.73.17.20' },
        { ip: '2a01:390:1:0:226:9eff:fe02:772c', ns: 'ns3.nic.sk' },
        { ip: '62.176.169.19', ns: 'ns4.nic.sk' }
      ]
    }
  },
  mock3: {
    // error message for a non-existing domain
    id: null,
    jsonrpc: '2.0',
    result: { ns_list: [], ds_list: [] }
  },
  mock4: {
    // error message for an unallowed domain
    jsonrpc: '2.0',
    result: {
      message: 'Domain name name or label outside allowed length',
      status: 'nok'
    },
    id: null
  }
};
