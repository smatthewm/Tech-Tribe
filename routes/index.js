var express = require('express');
var models = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/users', function(req, res, next) {
  models.bus.findAll({}).then(busAsPlainObject => {

    res.send(busAsPlainObject);
  });
});
router.get('/', function(req, res) {
  res.send('You successfully created a GET route!');
});


module.exports = router;

