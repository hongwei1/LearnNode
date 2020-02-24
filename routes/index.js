var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
    '/',  //1st: 路劲
    function(req, res, next) {
      var body = 'Hello World';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.end(body);
      // res.render('index', { title: 'Express' });
    } //2rd: 回调函数.
);

module.exports = router;
