var express = require('express');
var router = express.Router();  

var data = {
  "code":'000',
  'message':'message消息',
  'lists':[
    {
      'name':'小明',
      'age':'12',
      'sex':'男'
    },{
      'name':'小红',
      'age':'12',
      'sex':'男'
    }
  ]
}




/**  我们需要通过get获取到的数据内容 */

/* GET users listing. */
router.get('/nihda', function(req, res, next) {
  res.send(data);
});

module.exports = router;
