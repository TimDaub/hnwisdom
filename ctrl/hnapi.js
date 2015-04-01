var request = require('request');
var config = require('../config.json');

exports.getComment = function(hnid, next) {
  request(config.hnapi + hnid + '.json', function (error, res, body) {
    if (!error && res.statusCode == 200) {
      next(null, JSON.parse(body));
    } else {
      next(err, null);
    }
  });
};