// app.js

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./config/api');
var app = express();
// var vertoken  = require('./config/token_vertify');
// var expressJwt  = require('express-jwt');

// //验证token是否过期并规定哪些路由不用验证;
// app.use(expressJwt({
//   secret:'mes_qdhd_mobile_xhykjyxgs',
// }).unless({
//   path:['/api/login']   //除了这个地址其他的都需要验证
// }))

// app.use(function (req,res,next) { 
//   var token = req.headers['authorization'];
//   console.log(token,'token')
//   if(token == undefined){
//     // return res.status(401).send('token undefined');
//     return next();
//   }else{
//     vertoken.verToken(token).then(data=>{
//       req.data = data;
//       return next();
//     }).catch((error)=>{
//       return next();
//     })
//   }
//  })


// app.use(function (err,req,next) { 
//   if(err.status == 401){
//     return res.status(401).send('token失效');
//   }

//  })


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
app.get('/api/*', api.get);
app.post('/api/*', api.post);

module.exports = app;
