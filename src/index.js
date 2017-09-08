import dataFromParentZone from './methods/dataFromParentZone';
import nameserverIPs from './methods/nameserverIPs';
import startDomainTest from './methods/startDomainTest';
import testHistory from './methods/testHistory';
import testProgress from './methods/testProgress';
import testResult from './methods/testResult';
import validateTestID from './methods/validateTestID';
import versionInfo from './methods/versionInfo';

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

Zonemaster.prototype.dataFromParentZone = dataFromParentZone;
Zonemaster.prototype.nameserverIPs = nameserverIPs;
Zonemaster.prototype.startDomainTest = startDomainTest;
Zonemaster.prototype.testHistory = testHistory;
Zonemaster.prototype.testProgress = testProgress;
Zonemaster.prototype.testResult = testResult;
Zonemaster.prototype.validateTestID = validateTestID;
Zonemaster.prototype.versionInfo = versionInfo;
