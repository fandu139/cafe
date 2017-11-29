const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('views/index');
});

router.get('/cafes', function (req, res) {
  res.render('views/cafe/list');
});

router.get('/cafes/:id', function (req, res) {
  var data = { cafeId: req.params.id };

  res.render('views/cafe/detail', data);
});

module.exports = router;