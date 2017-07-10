import 'isomorphic-fetch';

const rpc = async (url, method, params) => {
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
};

export default rpc;
