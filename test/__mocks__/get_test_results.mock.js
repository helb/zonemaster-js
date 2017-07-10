export default {
  mock1: {
    // returns result for a finished test
    result: {
      id: 1274780,
      creation_time: '2017-07-07 10:13:02.910513',
      params: { domain: 'nic.cz' },
      results: [
        {
          message: 'Using version v1.0.16 of the Zonemaster engine.\n',
          level: 'INFO',
          module: 'SYSTEM'
        },
        {
          module: 'SYSTEM',
          level: 'INFO',
          message: 'Configuration was read from DEFAULT CONFIGURATION\n'
        },
        { module: 'SYSTEM', message: 'Policy was read from DEFAULT POLICY\n', level: 'INFO' },
        {
          module: 'BASIC',
          level: 'INFO',
          message: 'Nameserver for zone cz replies when trying to fetch glue.\n'
        },
        {
          module: 'BASIC',
          message:
            'Nameserver for zone cz listed these nameservers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n',
          level: 'INFO'
        },
        {
          module: 'BASIC',
          message: 'IPv4 is enabled,  can send "NS" query to a.ns.nic.cz/194.0.12.1.\n',
          level: 'INFO'
        },
        {
          message:
            'Nameserver a.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n',
          level: 'INFO',
          module: 'BASIC'
        },
        {
          level: 'INFO',
          message: 'IPv6 is enabled,  can send "NS" query to a.ns.nic.cz/2001:678:f::1.\n',
          module: 'BASIC'
        },
        {
          module: 'BASIC',
          message:
            'Nameserver a.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n',
          level: 'INFO'
        },
        {
          level: 'INFO',
          message: 'IPv4 is enabled,  can send "NS" query to b.ns.nic.cz/194.0.13.1.\n',
          module: 'BASIC'
        },
        {
          module: 'BASIC',
          level: 'INFO',
          message:
            'Nameserver b.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n'
        },
        {
          level: 'INFO',
          message: 'IPv6 is enabled,  can send "NS" query to b.ns.nic.cz/2001:678:10::1.\n',
          module: 'BASIC'
        },
        {
          level: 'INFO',
          message:
            'Nameserver b.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n',
          module: 'BASIC'
        },
        {
          module: 'BASIC',
          level: 'INFO',
          message: 'IPv4 is enabled,  can send "NS" query to d.ns.nic.cz/193.29.206.1.\n'
        },
        {
          level: 'INFO',
          message:
            'Nameserver d.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n',
          module: 'BASIC'
        },
        {
          message: 'IPv6 is enabled,  can send "NS" query to d.ns.nic.cz/2001:678:1::1.\n',
          level: 'INFO',
          module: 'BASIC'
        },
        {
          module: 'BASIC',
          level: 'INFO',
          message:
            'Nameserver d.ns.nic.cz listed these servers as glue: a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz..\n'
        },
        {
          module: 'BASIC',
          message: 'Functional nameserver found. "A" query for www.nic.cz test skipped.\n',
          level: 'INFO'
        },
        {
          level: 'INFO',
          message: 'All Nameserver addresses are in the routable public addressing space.\n',
          module: 'ADDRESS'
        },
        {
          module: 'ADDRESS',
          message: 'Reverse DNS entry exists for each Nameserver IP address.\n',
          level: 'INFO'
        },
        {
          module: 'ADDRESS',
          level: 'INFO',
          message: 'Every reverse DNS entry matches name server name.\n'
        },
        {
          level: 'INFO',
          message: 'Nameserver a.ns.nic.cz/194.0.12.1 accessible over UDP on port 53.\n',
          module: 'CONNECTIVITY'
        },
        {
          level: 'INFO',
          message: 'Nameserver a.ns.nic.cz/2001:678:f::1 accessible over UDP on port 53.\n',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Nameserver b.ns.nic.cz/194.0.13.1 accessible over UDP on port 53.\n',
          level: 'INFO'
        },
        {
          message: 'Nameserver b.ns.nic.cz/2001:678:10::1 accessible over UDP on port 53.\n',
          level: 'INFO',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONNECTIVITY',
          level: 'INFO',
          message: 'Nameserver d.ns.nic.cz/193.29.206.1 accessible over UDP on port 53.\n'
        },
        {
          message: 'Nameserver d.ns.nic.cz/2001:678:1::1 accessible over UDP on port 53.\n',
          level: 'INFO',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Nameserver a.ns.nic.cz/194.0.12.1 accessible over TCP on port 53.\n',
          level: 'INFO'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Nameserver a.ns.nic.cz/2001:678:f::1 accessible over TCP on port 53.\n',
          level: 'INFO'
        },
        {
          module: 'CONNECTIVITY',
          level: 'INFO',
          message: 'Nameserver b.ns.nic.cz/194.0.13.1 accessible over TCP on port 53.\n'
        },
        {
          level: 'INFO',
          message: 'Nameserver b.ns.nic.cz/2001:678:10::1 accessible over TCP on port 53.\n',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Nameserver d.ns.nic.cz/193.29.206.1 accessible over TCP on port 53.\n',
          level: 'INFO'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Nameserver d.ns.nic.cz/2001:678:1::1 accessible over TCP on port 53.\n',
          level: 'INFO'
        },
        {
          message: 'Name servers have IPv4 addresses in the following ASs: 25192.\n',
          level: 'INFO',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONNECTIVITY',
          message: 'Name servers have IPv6 addresses in the following ASs: 25192.\n',
          level: 'INFO'
        },
        {
          module: 'CONNECTIVITY',
          message:
            'All nameservers in the delegation have IPv4 addresses in the same AS (25192).\n',
          level: 'WARNING'
        },
        {
          module: 'CONNECTIVITY',
          message:
            'All nameservers in the delegation have IPv6 addresses in the same AS (25192).\n',
          level: 'WARNING'
        },
        {
          level: 'WARNING',
          message: 'All nameservers in the delegation are in the same AS (25192).\n',
          module: 'CONNECTIVITY'
        },
        {
          module: 'CONSISTENCY',
          message: 'A single SOA serial number was found (1499093801).\n',
          level: 'INFO'
        },
        {
          module: 'CONSISTENCY',
          level: 'INFO',
          message: 'A single SOA rname value was found (hostmaster.nic.cz.)\n'
        },
        {
          message:
            'A single SOA time parameter set was seen (REFRESH=10800, RETRY=3600, EXPIRE=1209600, MINIMUM=7200).\n',
          level: 'INFO',
          module: 'CONSISTENCY'
        },
        {
          module: 'CONSISTENCY',
          message: 'A single NS set was found (a.ns.nic.cz., b.ns.nic.cz., d.ns.nic.cz.).\n',
          level: 'INFO'
        },
        {
          module: 'CONSISTENCY',
          level: 'INFO',
          message: 'Glue records areconsistent between glue and authoritative data.\n'
        },
        { level: 'INFO', message: 'Found DS records with tags 61281.\n', module: 'DNSSEC' },
        {
          level: 'INFO',
          message: 'There are bothDS and DNSKEY records with key tags 61281.\n',
          module: 'DNSSEC'
        },
        {
          module: 'DNSSEC',
          level: 'INFO',
          message:
            'DS record with keytag 61281 and digest type 2 matches the DNSKEY with the same tag.\n'
        },
        {
          message: 'At least one DS record with a matching DNSKEY record was found.\n',
          level: 'INFO',
          module: 'DNSSEC'
        },
        {
          module: 'DNSSEC',
          message:
            'RRSIG with keytag 57307 and covering type(s) DNSKEY expires at : Sun Jul 16 15:37:45 2017.\n',
          level: 'INFO'
        },
        {
          module: 'DNSSEC',
          message:
            'RRSIG with keytag 61281 and covering type(s) DNSKEY expires at : Sun Jul 16 19:18:00 2017.\n',
          level: 'INFO'
        },
        {
          message:
            'RRSIG with keytag 57307 and covering type(s) SOA expires at : Sun Jul 16 15:07:29 2017.\n',
          level: 'INFO',
          module: 'DNSSEC'
        },
        {
          message:
            'The DNSKEY with tag 57307 uses algorithm number 13/(ECDSA Curve P-256 with SHA-256) [OK].\n',
          level: 'INFO',
          module: 'DNSSEC'
        },
        {
          level: 'INFO',
          message:
            'The DNSKEY with tag 61281 uses algorithm number 13/(ECDSA Curve P-256 with SHA-256) [OK].\n',
          module: 'DNSSEC'
        },
        { message: 'The zone has NSEC3 records.\n', level: 'INFO', module: 'DNSSEC' },
        {
          module: 'DNSSEC',
          level: 'INFO',
          message: 'Delegation from parent to child is properly signed.\n'
        },
        {
          level: 'INFO',
          message:
            'Parent lists enough (3) nameservers (a.ns.nic.cz; b.ns.nic.cz; d.ns.nic.cz). Lower limit set to 2.\n',
          module: 'DELEGATION'
        },
        {
          module: 'DELEGATION',
          level: 'INFO',
          message:
            'Child lists enough (3) nameservers (a.ns.nic.cz; b.ns.nic.cz; d.ns.nic.cz). Lower limit set to 2.\n'
        },
        {
          module: 'DELEGATION',
          level: 'INFO',
          message:
            'Parent and child list enough (3) nameservers (a.ns.nic.cz; b.ns.nic.cz; d.ns.nic.cz). Lower limit set to 2.\n'
        },
        {
          module: 'DELEGATION',
          message: 'All the IP addresses used by the nameservers are unique\n',
          level: 'INFO'
        },
        {
          level: 'INFO',
          message:
            'The smallest possible legal referral packet is smaller than 513 octets (it is 366).\n',
          module: 'DELEGATION'
        },
        {
          module: 'DELEGATION',
          message:
            'All these nameservers are confirmed to be authoritative : a.ns.nic.cz, b.ns.nic.cz, d.ns.nic.cz.\n',
          level: 'INFO'
        },
        {
          level: 'INFO',
          message: 'No nameserver points to CNAME alias.\n',
          module: 'DELEGATION'
        },
        {
          message: 'All the nameservers have SOA record.\n',
          level: 'INFO',
          module: 'DELEGATION'
        },
        {
          module: 'DELEGATION',
          level: 'INFO',
          message: 'All of the nameserver namesare listed both at parent and child.\n'
        },
        {
          ns: 'All',
          message:
            'None of the following nameservers is a recursor : a.ns.nic.cz, b.ns.nic.cz, d.ns.nic.cz.\n',
          level: 'INFO',
          module: 'NAMESERVER'
        },
        {
          ns: 'All',
          level: 'INFO',
          message:
            'The following nameservers support EDNS0 : b.ns.nic.cz/194.0.13.1, b.ns.nic.cz/2001:678:10::1, a.ns.nic.cz/194.0.12.1, d.ns.nic.cz/2001:678:1::1, d.ns.nic.cz/193.29.206.1, a.ns.nic.cz/2001:678:f::1.\n',
          module: 'NAMESERVER'
        },
        {
          ns: 'a.ns.nic.cz',
          message: 'AXFR not available on nameserver a.ns.nic.cz/194.0.12.1.\n',
          level: 'INFO',
          module: 'NAMESERVER'
        },
        {
          module: 'NAMESERVER',
          level: 'INFO',
          message: 'AXFR not available on nameserver a.ns.nic.cz/2001:678:f::1.\n',
          ns: 'a.ns.nic.cz'
        },
        {
          ns: 'b.ns.nic.cz',
          message: 'AXFR not available on nameserver b.ns.nic.cz/194.0.13.1.\n',
          level: 'INFO',
          module: 'NAMESERVER'
        },
        {
          ns: 'b.ns.nic.cz',
          message: 'AXFR not available on nameserver b.ns.nic.cz/2001:678:10::1.\n',
          level: 'INFO',
          module: 'NAMESERVER'
        },
        {
          ns: 'd.ns.nic.cz',
          level: 'INFO',
          message: 'AXFR not available on nameserver d.ns.nic.cz/193.29.206.1.\n',
          module: 'NAMESERVER'
        },
        {
          module: 'NAMESERVER',
          level: 'INFO',
          message: 'AXFR not available on nameserver d.ns.nic.cz/2001:678:1::1.\n',
          ns: 'd.ns.nic.cz'
        },
        {
          module: 'NAMESERVER',
          message: 'All nameservers reply with same IP used to query them.\n',
          level: 'INFO',
          ns: 'All'
        },
        {
          message:
            'The following nameservers answer AAAA queries without problems : d.ns.nic.cz/2001:678:1::1, b.ns.nic.cz/2001:678:10::1, a.ns.nic.cz/194.0.12.1, b.ns.nic.cz/194.0.13.1, a.ns.nic.cz/2001:678:f::1, d.ns.nic.cz/193.29.206.1.\n',
          level: 'INFO',
          ns: 'All',
          module: 'NAMESERVER'
        },
        {
          ns: 'All',
          level: 'INFO',
          message: 'All nameservers succeeded to resolve to an IP address.\n',
          module: 'NAMESERVER'
        },
        {
          ns: 'All',
          level: 'INFO',
          message:
            'None of the following nameservers returns an upward referral : a.ns.nic.cz, b.ns.nic.cz, d.ns.nic.cz.\n',
          module: 'NAMESERVER'
        },
        {
          module: 'NAMESERVER',
          ns: 'a.ns.nic.cz',
          level: 'INFO',
          message:
            'Nameserver a.ns.nic.cz/194.0.12.1 preserves original case of queried names (WWw.NIc.cZ).\n'
        },
        {
          ns: 'a.ns.nic.cz',
          message:
            'Nameserver a.ns.nic.cz/2001:678:f::1 preserves original case of queried names (WWw.NIc.cZ).\n',
          level: 'INFO',
          module: 'NAMESERVER'
        },
        {
          level: 'INFO',
          message:
            'Nameserver b.ns.nic.cz/194.0.13.1 preserves original case of queried names (WWw.NIc.cZ).\n',
          ns: 'b.ns.nic.cz',
          module: 'NAMESERVER'
        },
        {
          module: 'NAMESERVER',
          ns: 'b.ns.nic.cz',
          message:
            'Nameserver b.ns.nic.cz/2001:678:10::1 preserves original case of queried names (WWw.NIc.cZ).\n',
          level: 'INFO'
        },
        {
          module: 'NAMESERVER',
          ns: 'd.ns.nic.cz',
          message:
            'Nameserver d.ns.nic.cz/193.29.206.1 preserves original case of queried names (WWw.NIc.cZ).\n',
          level: 'INFO'
        },
        {
          module: 'NAMESERVER',
          ns: 'd.ns.nic.cz',
          message:
            'Nameserver d.ns.nic.cz/2001:678:1::1 preserves original case of queried names (WWw.NIc.cZ).\n',
          level: 'INFO'
        },
        {
          ns: 'All',
          level: 'INFO',
          message:
            'When asked for SOA records on "www.nic.cz" with different cases,  all servers reply consistently.\n',
          module: 'NAMESERVER'
        },
        {
          message: 'No illegal characters in the domain name (nic.cz).\n',
          level: 'INFO',
          module: 'SYNTAX'
        },
        {
          module: 'SYNTAX',
          level: 'INFO',
          message: 'Neither end of any label in the domain name (nic.cz) has a hyphen.\n'
        },
        {
          module: 'SYNTAX',
          level: 'INFO',
          message:
            "Domain name (nic.cz) has no label with a double hyphen ('--') in position 3 and 4 (with a prefix which is not 'xn--').\n"
        },
        {
          module: 'SYNTAX',
          message: 'Nameserver (a.ns.nic.cz) syntax is valid.\n',
          level: 'INFO'
        },
        {
          message: 'Nameserver (b.ns.nic.cz) syntax is valid.\n',
          level: 'INFO',
          module: 'SYNTAX'
        },
        {
          level: 'INFO',
          message: 'Nameserver (d.ns.nic.cz) syntax is valid.\n',
          module: 'SYNTAX'
        },
        {
          module: 'SYNTAX',
          level: 'INFO',
          message:
            "There is no misused '@' character in the SOA RNAME field (hostmaster.nic.cz.).\n"
        },
        {
          module: 'SYNTAX',
          level: 'INFO',
          message: 'The SOA RNAME field (hostmaster@nic.cz) is compliant with RFC2822.\n'
        },
        {
          module: 'SYNTAX',
          message: 'SOA MNAME (a.ns.nic.cz) syntax is valid.\n',
          level: 'INFO'
        },
        {
          module: 'SYNTAX',
          level: 'INFO',
          message: 'Domain name MX (bh.nic.cz) syntax is valid.\n'
        },
        {
          level: 'INFO',
          message: 'Domain name MX (mail.nic.cz) syntax is valid.\n',
          module: 'SYNTAX'
        },
        {
          module: 'SYNTAX',
          message: 'Domain name MX (mx.nic.cz) syntax is valid.\n',
          level: 'INFO'
        },
        {
          module: 'ZONE',
          level: 'INFO',
          message: "SOA 'mname' nameserver (a.ns.nic.cz)is authoritative for 'nic.cz' zone.\n"
        },
        {
          level: 'NOTICE',
          message: "SOA 'refresh' value (10800) is less than the recommended minimum (14400).\n",
          module: 'ZONE'
        },
        {
          level: 'INFO',
          message: "SOA 'refresh' value (10800) is greater than the SOA 'retry' value (3600).\n",
          module: 'ZONE'
        },
        {
          module: 'ZONE',
          level: 'INFO',
          message:
            "SOA 'expire' value (1209600) is higher than the minimum recommended value (604800) and not lower than the 'refresh' value (10800).\n"
        },
        {
          module: 'ZONE',
          level: 'INFO',
          message: "SOA 'minimum' value (7200) is within the recommended ones (300/86400).\n"
        },
        {
          message:
            "SOA 'mname' value (a.ns.nic.cz) refers to a NS which is not an alias (CNAME).\n",
          level: 'INFO',
          module: 'ZONE'
        },
        {
          module: 'ZONE',
          level: 'INFO',
          message: "SOA 'mname' value (a.ns.nic.cz) refers to a NS which is not an alias (CNAME).\n"
        },
        {
          module: 'ZONE',
          level: 'INFO',
          message:
            'Target (MX=mail.nic.cz/MX=mx.nic.cz/MX=bh.nic.cz) found to deliver e-mail for the domain name.\n'
        }
      ],
      hash_id: '2499e68a5e11234a'
    },
    jsonrpc: '2.0',
    id: 2
  },
  mock2: { // returns an error for a non-existing test
    jsonrpc: '2.0',
    id: 2,
    error: {
      message:
        'malformed JSON string, neither array, object, number, string or atom, at character offset 0 (before "(end of string)") at /usr/share/perl5/Zonemaster/WebBackend/DB/PostgreSQL.pm line 184.\n',
      code: -32603
    }
  }
};
