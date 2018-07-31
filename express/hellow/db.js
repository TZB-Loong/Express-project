var db = {};
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host:'rm-wz9kw0sm470u93tmto.mysql.rds.aliyuncs.com',
    user:'edsion',
    password:'LBj686449',
    database:'woxingtianxia'
});
db.query = function(sql,callback){

    if(!sql){
        callback();
        return
    }
    pool.query(sql,function(err,rows,fields){
        if(err){
            console.log(err);
            callback(err,null);
            return;
        }
        callback (null,rows,fields);
    });
}

module.exports = db;  //封装连接数据库的代码,就不必一次次的去连接数据库了