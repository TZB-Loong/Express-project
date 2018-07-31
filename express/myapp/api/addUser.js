var dbConfing = require('../db/DBConfig');
var userSQL = require('../db/usersql');

//使用DBConfig.js的配置信息创建一个mySql连接池
var pool = mysql.createPool(dbConfing.mysql);

//响应一个json数据
var responseJSON = function(res,ret){

    if(typeof ret === 'underfined'){
      res.json({code:'-200',msg:'操作失败'})
    }else{
      res.json(ret);
    }
  };


exports.getData= function(req,res,next){
    // console.log(req,'---')
    //从连接池里面获取连接
    pool.getConnection(function(err,connection){
        //获取前台页面传过来的参数
        // console.log()
      var param = req.query || req.params;
      //建立连接 增加一个用户信息
      connection.query(userSQL.insert,[param.uid,param.name],function(err,result){
        if(result){
          result ={
            code:200,
            msg:'增加成功'
          }
        }
  
        //以json形式,把操作结果返回前台页面
        responseJSON(res,result);
  
        //释放连接
        connection.release();
      });
    });
    
  }
