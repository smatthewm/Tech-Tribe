var express = require('express');
var models = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/users', function(req, res, next) {
  models.bus.findAll({}).then(busAsPlainObject => {

    res.send(busAsPlainObject);
  });
});
router.get('/student', function(req, res, next) {
  models.student.findAll({}).then(studentAsPlainObject => {

    res.send(studentAsPlainObject);
  });
});
router.get('/driver', function(req, res, next) {
  models.driver.findAll({ where: { driver: req.query.name }, attributes: ['driver'] }).then(driver => {
    if (driver.length) {
      res.send(driver);
    } else {
      res.send('Sad, no one is here!');
    }
  });
});
router.get('/guardian', function(req, res, next) {
  models.guardian.findAll({}).then(guardianAsPlainObject => {

    res.send(guardianAsPlainObject);
  });
});

router.get('/', function(req, res) {
  res.send('You successfully created a GET route!');
});


module.exports = router;

