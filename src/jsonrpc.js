import 'isomorphic-fetch';

export default async function rpc(url, method, params) {
  let response = await fetch(url, {
    'method': 'POST',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      jsonrpc: '2.0',
      method,
      params
    })
  });

  let data = await response.json();
  return data.result;
}
