# Zonemaster.js

JavaScript interface for [Zonemaster](https://github.com/dotse/zonemaster-backend/) JSONRPC API.

[![Build Status](https://travis-ci.org/helb/zonemaster-js.svg?branch=master)](https://travis-ci.org/helb/zonemaster-js)
[![codecov](https://codecov.io/gh/helb/zonemaster-js/branch/master/graph/badge.svg)](https://codecov.io/gh/helb/zonemaster-js)
[![npm version](https://badge.fury.io/js/zonemaster-js.svg)](https://badge.fury.io/js/zonemaster-js)

## Installation & basic usage

```sh
$ npm install --save zonemaster-js
```

```javascript
import Zonemaster from 'zonemaster-js';

const zm = new Zonemaster('https://backend-url');
// backend needs to live on the same domain or accept CORS requests,
// use --disable-web-security flag for Chrome for easy testing


// using with Promises (ES6/ES2015):

zm.versionInfo().then(version => console.log(version));
// → {'zonemaster_backend': '…', 'zonemaster_engine': '…'}


// using with async/await (ES8/ES2017):

console.log(await zm.versionInfo());
// → {'zonemaster_backend': '…', 'zonemaster_engine': '…'}
console.log(await zm.nameserverIPs('nic.cz'));
// → {'nameservers': ['2001:1488:0:3::2', '217.31.205.50']}
```

Note: `await` can be used inside `async` functions only, as there is no support for "top-level await" in JS (currently?):

-   [Clarifying question: can await be used in top-level code?](https://github.com/tc39/ecmascript-asyncawait/issues/9)
-   [Top-level await is a footgun](https://gist.github.com/Rich-Harris/0b6f317657f5167663b493c722647221)
-   It's supported in Chrome DevTools Console since Chrome 62 however, might be useful for trying out and debugging: [Top-level await operators in the Console](https://developers.google.com/web/updates/2017/08/devtools-release-notes#await)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [Zonemaster](#zonemaster)
-   [dataFromParentZone](#datafromparentzone)
-   [nameserverIPs](#nameserverips)
-   [startDomainTest](#startdomaintest)
-   [testHistory](#testhistory)
-   [testProgress](#testprogress)
-   [testResult](#testresult)
-   [validateSyntax](#validatesyntax)
-   [validateTestID](#validatetestid)
-   [versionInfo](#versioninfo)

### Zonemaster

Interface to the Zonemaster backend.

**Parameters**

-   `backendUrl`  Zonemaster backend URL, including protocol

**Examples**

```javascript
const zm = new Zonemaster('http://localhost:5000/')
```

### dataFromParentZone

Get domain data from it's parent zone. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone>

**Parameters**

-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name.

**Examples**

```javascript
zm.dataFromParentZone('nic.cz')
// → {'ns_list': […], 'ds_list': […]}
zm.dataFromParentZone('does-not-exist.cz')
// → {'error': 'Domain does not exist.'}
zm.dataFromParentZone('.cz')
// → {'error': 'Domain name name or label outside allowed length'} -- error message from backend
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.ns_list - See backend docs.

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.ds_list - See backend docs.

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error   - Returns an error message when both ns_list and ds_list are empty or when the backend responds with an error message.

### nameserverIPs

Get nameservers for a domain. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_ns_ips>

**Parameters**

-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name.

**Examples**

```javascript
zm.nameserverIPs('nic.cz')
// → {'nameservers': […]}
zm.nameserverIPs('does-not-exist.cz')
// → {error: 'No A or AAAA records found.'}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.nameservers - Nameserver IPs, both IPv4 and IPv6

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error       - Returns an error when no nameservers are found (backend returned 0.0.0.0, see their docs)

### startDomainTest

Start a new domain test. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-start_domain_test>

**Parameters**

-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A config object with domain and some advanced options
    -   `config.domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name, required
    -   `config.nameservers` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Nameservers to use, optional, see backend docs
    -   `config.profile` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Test profile to use, optional
    -   `config.ipv4` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Use IPv4, optional
    -   `config.ipv6` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Use IPv6, optional
    -   `config.priority` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Test priority, optional
-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** …or just a a domain name string

**Examples**

```javascript
zm.startDomainTest('nic.cz')
zm.startDomainTest({domain: 'nic.cz', nameservers: {…}, ipv6: true})
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.id - Test ID

### testHistory

Get test history for a domain. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_test_history>

**Parameters**

-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

### testProgress

Get test progress percentage. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-test_progress>

**Parameters**

-   `testId`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Test ID (as returned from the startDomainTest method)

**Examples**

```javascript
zm.testProgress('abdf123456789012')
// → {progress: 80}
zm.testProgress('foo')
// → {error: 'Invalid test ID.'}
zm.testProgress('1234567890123456')
// → {error: 'Test not found.'}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** data.progress - Test progress percentage

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error    - Returns an error message for an invalid ID format or when the test wasn't found.

### testResult

Get test result. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_test_results>

**Parameters**

-   `testId`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Test ID (as returned from the startDomainTest method)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error    - Returns an error message for an invalid ID format or when the test wasn't found.

### validateSyntax

Checks the domain name and params for validity. Async method.

Domain is checked against a regex, because the backend validation is not working properly…

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-validate_syntax>

**Parameters**

-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A config object, same structure as in `startDomainTest`

**Examples**

```javascript
zm.validateSyntax('nic.cz')
// → {ok: true, message: 'Syntax ok'}
zm.validateSyntax({domain: 'nic.cz', ipv4: false, ipv6: true})
// → {ok: true, message: 'Syntax ok'}
zm.validateSyntax('_')
// → {ok: false, message: 'Invalid domain.'}
zm.validateSyntax('háčkyčárky.cz')
// → {ok: false, message: 'Domain name contains non-ascii characters and IDN conversion is not installed'}
// (domain is valid, but didn't pass backend validation)
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** data.ok

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.message   - Human readable message from the backend

### validateTestID

Validate test ID with a simple regex.

**Parameters**

-   `testId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

**Examples**

```javascript
zm.validateTestID('abdf123456789012')
// → true
zm.validateTestID('foo')
// → false
```

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### versionInfo

Get Zonemaster's backend and engine version. Async method.

API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-version_info>

**Examples**

```javascript
zm.versionInfo()
// → {'zonemaster_backend': '…', 'zonemaster_engine': '…'}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.zonemaster_backend

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** data.zonemaster_engine

## Development

```sh
$ git clone https://github.com/helb/zonemaster-js.git && cd zonemaster-js.git
$ npm install
```

### Testing

```sh
$ npm test
```

Set your options in `test-config.js`. HTTP calls are mocked by default, if you want to use a real backend, set it's URL in the config file and enable it's use:

```javascript
const config = {
  backendUrl: 'https://url:port/',
  useRealBackend: true,
  …
```

Generating a test coverage report:

```sh
$ npm run coverage
```

Reports are placed into `./coverage` directory and a HTML version should open in your default browser when finished.

### Building

```sh
$ npm run build
```

Build output is placed to `./dist` directory. Multiple module formats are built, as provided by [microbundle](https://github.com/developit/microbundle) (CJS, UMD & ESM).
