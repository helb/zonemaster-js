import dataFromParentZone from './methods/dataFromParentZone';
import nameserverIPs from './methods/nameserverIPs';
import startDomainTest from './methods/startDomainTest';
import testHistory from './methods/testHistory';
import testProgress from './methods/testProgress';
import testResult from './methods/testResult';
import validateTestID from './methods/validateTestID';
import versionInfo from './methods/versionInfo';
import validateSyntax from './methods/validateSyntax';

/**
 * Interface to the Zonemaster backend.
 * @param backendUrl Zonemaster backend URL, including protocol
 *
 * @example
 * const zm = new Zonemaster('http://localhost:5000/')
 */
export default class Zonemaster {
  constructor(backendUrl) {
    this.config = {
      backendUrl
    };
  }
}

Object.assign(Zonemaster.prototype, {
  dataFromParentZone,
  nameserverIPs,
  startDomainTest,
  testHistory,
  testProgress,
  testResult,
  validateTestID,
  validateSyntax,
  versionInfo
});
