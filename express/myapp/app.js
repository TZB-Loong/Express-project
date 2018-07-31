// app.js

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./config/api');

var mysql = require('mysql');

var dbConfing = require('./db/DBConfig');
var userSQL = require('./db/usersql');

var app = express();

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




/*引入api*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置请求
app.get('/', function(req, res){
    res.send('hello world');
});

// 添加用户
app.get('/addUser',function(req,res,next){
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
  })

// app.get('/api/*', api.get);
// app.post('/api/*', api.post);



module.exports = app;
