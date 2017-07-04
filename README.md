# Zonemaster.js

JavaScript interface for [Zonemaster](https://github.com/dotse/zonemaster-backend/) JSONRPC API.

## Installation

```sh
$ npm install --save zonemaster
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Zonemaster

Interface to the Zonemaster backend.

**Parameters**

-   `backendUrl`  Zonemaster backend URL, including protocol

**Examples**

```javascript
const zm = new Zonemaster('http://localhost:5000/')
```

#### versionInfo

Get Zonemaster's backend and engine version.
API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-version_info>

**Examples**

```javascript
zm.versionInfo()
// → {'zonemaster_backend': '…', 'zonemaster_engine': '…'}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** data.zonemaster_backend

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** data.zonemaster_engine

#### getDataFromParentZone

Get domain data from it's parent zone.
API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_data_from_parent_zone>

**Parameters**

-   `domain` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name.

**Examples**

```javascript
zm.getDataFromParentZone('nic.cz')
// → {'ns_list': […], 'ds_list': […]}
zm.getDataFromParentZone('does-not-exist.cz')
// → {'error': 'Domain does not exist.'}
zm.getDataFromParentZone('.cz')
// → {'error': 'Domain name name or label outside allowed length'} -- error message from backend
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.ns_list - See backend docs.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.ds_list - See backend docs.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error Returns an error message when both ns_list and ds_list are empty or when the backend responds with an error message.

#### getNameserverIPs

Get nameservers for a domain.
API method: <https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md#api-method-get_ns_ips>

**Parameters**

-   `domain` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Domain name.

**Examples**

```javascript
zm.getNameserverIPs('nic.cz')
// → {'nameservers': […]}
zm.getNameserverIPs('does-not-exist.cz')
// → {error: 'No A or AAAA records found.'}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** data

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** data.nameservers - Nameserver IPs, both IPv4 and IPv6

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** data.error - Returns an error when no nameservers are found (backend returned 0.0.0.0, see their docs)

## Development

```sh
$ git clone https://github.com/helb/zonemaster-js.git && cd zonemaster-js.git
$ npm install
```

### Testing

```sh
$ # edit test-config.js and set your backend URL
$ npm test
```

Generating a coverage report:

```sh
$ npm run coverage
```

Reports are placed into `./coverage` directory and a HTML version should open in your default browser when finished.

### Building

```sh
$ npm run build
```

Build output is placed to `./dist` directory.
