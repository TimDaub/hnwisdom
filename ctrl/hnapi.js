var request = require('request');
var HNAPI;

try {
  var config = require('../config.json');
} catch(e) {
  console.log('config.json is not available, therefore I will use an environment variable.');
}

if(config && config.hnapi) {
  HNAPI = config.hnapi;
} else {
  HNAPI = process.env.hnapi;
}

exports.getComment = function(hnid, next) {
  request(HNAPI  + hnid + '.json', function (error, res, body) {
    if (!error && res.statusCode == 200) {
      next(null, JSON.parse(body));
    } else {
      next(err, null);
    }
  });
};