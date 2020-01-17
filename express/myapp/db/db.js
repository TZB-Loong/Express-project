var mysql = require('mysql');
var dbConfig = require('./dbConfig');
 //每次使用的时候需要创建链接，数据操作之后要关闭连接
const pool = mysql.createPool(dbConfig.mysql);
module.exports = {
    query: function (sql, params) {
        return new Promise((resolve, reject )=>{
            pool.getConnection(function (err,connection) { 
                if(err){
                    //数据库连接错误
                    reject(err);
                }else{
                    connection.query(sql,params, (err,results) => { 
                        if(err){
                            //数据库操作错误
                            reject(err);
                        }else{
                            resolve(results);
                        }
                      // 只是释放连接池，在缓冲池，没有被销毁
                        connection.release();
                        if(err){
                            //连接池释放失败
                            reject(err);
                        }
                     })
                }
             })
        })
    }
}