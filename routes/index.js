var express = require('express');
var models = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/users', function(req, res, next) {
  models.bus.findAll({include:['roster','busDriver']}).then(busAsPlainObject => {

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
router.post('/guardian', (req, res) => {
  models.guardian
  .findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      studentFirstName: req.body.studentFirstName,
      studentLastName: req.body.studentLastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      cellPhone: req.body.cellPhone
      // busNumber: req.body.busNumber,
      // driver: req.body.driver
    }
  })
  .spread(function(result, created) {
    if (created) {
      res.redirect('/guardian');
    } else {
      res.send('This guardian already exists!');
    }
  });
});

router.get('/', function(req, res) {
  res.send('You successfully created a GET route!');
});


module.exports = router;

