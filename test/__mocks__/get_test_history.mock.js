export default {
  mock1: {
    // returns results for an existing domain
    id: 2,
    jsonrpc: '2.0',
    result: [
      {
        creation_time: '2017-07-10 10:15:00.472693',
        advanced_options: null,
        id: 'f7e3ab2ddb81d7f7',
        overall_result: 'ok'
      },
      {
        overall_result: 'warning',
        creation_time: '2017-07-10 10:15:00.339678',
        id: 'e458031b1f27287e',
        advanced_options: null
      },
      {
        overall_result: 'ok',
        creation_time: '2017-07-10 10:04:36.14536',
        advanced_options: null,
        id: 'de0d71457e3ddc20'
      },
      {
        overall_result: 'warning',
        creation_time: '2017-07-10 10:04:35.971893',
        advanced_options: null,
        id: 'e52e76d8def7eb2e'
      },
      {
        overall_result: 'ok',
        creation_time: '2017-07-07 12:09:23.045879',
        advanced_options: null,
        id: 'fd800ba4750b4e6f'
      },
      {
        id: '00456b6a456785b5',
        advanced_options: null,
        creation_time: '2017-07-07 12:09:22.917901',
        overall_result: 'warning'
      },
      {
        overall_result: 'ok',
        advanced_options: null,
        id: '4b685064bcd4c36d',
        creation_time: '2017-07-07 11:35:28.396253'
      },
      {
        creation_time: '2017-07-07 11:31:01.061653',
        id: '7e5f02f0e433fe20',
        advanced_options: null,
        overall_result: 'warning'
      },
      {
        overall_result: 'ok',
        creation_time: '2017-07-07 10:53:07.803333',
        id: 'bddddf2f9a13d8cf',
        advanced_options: null
      },
      {
        overall_result: 'warning',
        advanced_options: null,
        id: 'd0e1cf77129d39e4',
        creation_time: '2017-07-07 10:53:07.684163'
      },
      {
        advanced_options: null,
        id: '9281597bbc78f693',
        creation_time: '2017-07-07 10:40:23.246521',
        overall_result: 'ok'
      },
      {
        overall_result: 'warning',
        id: '2abb1f24a3e6b3de',
        advanced_options: null,
        creation_time: '2017-07-07 10:40:23.136145'
      },
      {
        overall_result: 'ok',
        creation_time: '2017-07-07 10:30:18.648672',
        id: '966de58a03e5479c',
        advanced_options: null
      },
      {
        overall_result: 'warning',
        creation_time: '2017-07-07 10:30:18.520369',
        id: '7fb771b3ccb54712',
        advanced_options: null
      },
      {
        id: '5fc2d9f850c14792',
        advanced_options: null,
        creation_time: '2017-07-07 10:17:25.469393',
        overall_result: 'ok'
      },
      {
        overall_result: 'warning',
        advanced_options: null,
        id: '2499e68a5e11234a',
        creation_time: '2017-07-07 10:13:02.910513'
      },
      {
        overall_result: 'warning',
        creation_time: '2017-07-07 10:01:12.371572',
        advanced_options: null,
        id: '2d7d72a849d5493c'
      },
      {
        advanced_options: null,
        id: '3f1a66e10833da04',
        creation_time: '2017-07-07 09:51:28.5701',
        overall_result: 'critical'
      },
      {
        id: '42591dd981eef15f',
        advanced_options: null,
        creation_time: '2017-06-28 18:21:00.443598',
        overall_result: 'warning'
      },
      {
        overall_result: 'ok',
        id: '05f1c09c13109ee1',
        advanced_options: null,
        creation_time: '2017-06-28 16:57:10.114797'
      },
      {
        overall_result: 'warning',
        creation_time: '2017-06-28 15:05:20.02887',
        advanced_options: null,
        id: '260ada4789b079b4'
      },
      {
        overall_result: 'warning',
        advanced_options: null,
        id: 'bc941272ed9ba1ac',
        creation_time: '2017-06-28 13:40:17.922375'
      }
    ]
  },
  mock2: {
    // returns an empty array for a non-existing domain
    result: [],
    jsonrpc: '2.0',
    id: 2
  }
};
