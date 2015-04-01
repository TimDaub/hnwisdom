var Datastore = require('nedb');
var hnapi = require('../ctrl/hnapi.js');
var PASSWORD;

try {
  var config = require('../config.json');
} catch(e) {
  console.log('config.json is not available, therefore I will use an environment variable.');
}

if(config && config.submissionPassword) {
  PASSWORD = config.submissionPassword
} else {
  PASSWORD = process.env.password;
}

exports.index = function(req, res){
  db = new Datastore({ filename: './submissions', autoload: true });
  
  db.find()
    .sort({modified: -1})
    .exec(function(err, dbres) {
      if(err) {
        res.render('error', {
          error: err
        });
      } else {
        res.render('index', {
          title: 'Hacker News Wisdom',
          submissions: dbres
        });
      }
    });
};

exports.postSubmissions = function(req, res) {
  if(req.body.hnid && req.body.hnid > 0 && PASSWORD === req.body.password) {

    hnapi.getComment(req.body.hnid, function(err, comment) {
      if(err) {
        res.json(500, err);
      } else {
        db = new Datastore({ filename: './submissions', autoload: true });
        db.insert({
          hnid: req.body.hnid,
          modified: new Date(),
          comment: comment
        }, function(err, dbres) {
          if(err) {
            res.json(500, err);
          } else {
            try {
              delete dbres['_id'];
              res.json(201, dbres);
            } catch(err) {
              res.json(500, err);
            }
          }
        });
      }
    });
  } else {
    res.json(500, new Error('hnid must be a number.'));
  }
};

exports.deleteSubmissions = function(req, res) {
  if(req.params.hnid && req.params.hnid > 0 && PASSWORD === req.body.password) {
    db = new Datastore({ filename: './submissions', autoload: true });
    db.remove({hnid: parseInt(req.params.hnid, 10)}, {multi: true}, function(err, numRmvd) {
      if(err) {
        res.json(500, err);
      } else {
        res.json(200, {
          numRemoved: numRmvd
        });
      }
    });
  } else {
    res.json(500, new Error('hnid must be a number.'));
  }
};