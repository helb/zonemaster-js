const rpc = async (url, method, params, rpcVersion = '2.0') => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: rpcVersion,
        method,
        params
      })
    });

    const data = await response.json();

    if (data.error) {
      return { error: data.error.message };
    }

    return data.result;
  } catch (err) {
    throw new Error(`Problem communicating with the Zonemaster backend. ${err}`);
  }
};

export default rpc;
