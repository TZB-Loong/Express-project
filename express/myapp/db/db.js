var mysql = require('mysql');
var dbConfig = require('./dbConfig');
module.exports = {
    query: function (sql, params, callback) {
        //每次使用的时候需要创建链接，数据操作之后要关闭连接
        var connection = mysql.createConnection(dbConfig);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库连接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作是失败');
                    throw err;
                }

                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思维，前面已经对错误进行了处理，如果数据检索报错
                //直接就会阻塞到这个文件中
                callback && callback(JSON.stringify(results)), JSON.parse(JSON.stringify(fields));

                //results作为数据操作后的结果，fields 作为数据连接的一些字段
                //停止链接数据库，必须查询语句后
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    }
}