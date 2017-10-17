export default function configFromDomainName(config) {
  let testConfig;
  if (typeof config === 'string') {
    testConfig = { domain: config };
  } else if (typeof config.domain !== 'string') {
    throw new Error('Domain name required.');
  } else {
    testConfig = config;
  }
  return testConfig;
}
