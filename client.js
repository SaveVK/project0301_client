let http = require("http");

var options = {
  hostname: '127.0.0.1',
  port: 3000,
  // path: '/ip',
  method: 'POST'
};

var req = http.request(options, function (res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  //"https://api.vk.com/method/wall.get?domain=indulgencia&count=1&filter=owner&access_token=53805e3c53805e3c53805e3c7753e014d95538053805e3c09c0a75ad6367900fdbfe33f&v=5.52&"
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    let obj = JSON.parse(chunk);
    let datt = obj.data;
    // console.log(obj.data);
    let respp = JSON.parse(datt);
    console.log(respp.response);
    // console.log(chunk);
  });
});

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write("https://api.vk.com/method/wall.get?domain=indulgencia&count=1&filter=owner&access_token=53805e3c53805e3c53805e3c7753e014d95538053805e3c09c0a75ad6367900fdbfe33f&v=5.52&");
// req.write("https://api.vk.com/method/getProfiles.xml?uid=66748&access_token=533bacf01e11f55b536a565b57531ac114461ae8736d6506a3");
req.end();