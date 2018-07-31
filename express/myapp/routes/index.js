var express = require('express');
var router = express.Router();

/**
 * 只是知道他是用来操作服务器的一些东西,结果到现在我也还是没看懂这是什么玩意
 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
