var db = require('./db');
var sql = 'SELECT count(*) as count from user';
db.query(sql,function(err,rows,fields){
    if(err){
        console.log(err);
        return ;
    }
    console.log('用户数量:',rows[0].count);
})
