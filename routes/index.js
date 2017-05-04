var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dr. Kung Chen' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | Dr. Kung Chen'});
});

router.get('/research', function(req, res, next) {
  res.render('research', { title: 'Research | Dr. Kung Chen'});
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Courses | Dr. Kung Chen'});
});

router.get('/publications', function(req, res, next) {
  res.render('publications', { title: 'Publications | Dr. Kung Chen'});
});

router.get('/join', function(req, res, next) {
  res.render('join', { title: 'Join | Dr. Kung Chen'});
});

module.exports = router;
