const rpc = async (url, method, params) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
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
