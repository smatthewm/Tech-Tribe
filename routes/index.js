var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { title: 'Test 1-2' });
});

module.exports = router;

