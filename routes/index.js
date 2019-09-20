var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET hello listing. */
router.get('/hello', function (req, res, next) {
  res.render('hello', { title: 'Hello World' });
});

/* GET time listing. */
router.get('/time', function (req, res, next) {
  res.render('time', {
    title: 'CurrentTime',
    date: new Date().toString()
  });
});

module.exports = router;
