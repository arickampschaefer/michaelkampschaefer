var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/FAQ', function(req, res) {
  res.render('pages/faq');
});

router.get('/links', function(req, res) {
  res.render('pages/links');
});

router.get('/services', function(req, res) {
  res.render('pages/services');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/approach', function(req, res) {
  res.render('pages/approach');
});

router.get('/publications', function(req, res) {
  res.render('pages/publications');
});

router.get('*', function(req, res){
  res.render('pages/404');
});

module.exports = router;
