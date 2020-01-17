// api/contract.js
//获取接口信息  localhost:3000/api/contract
var db = require('../db/db');
var UserSQL = require('../db/usersql');
exports.getData = async function(method,params){
    let backData= {};
    if(params.id == undefined){
        backData = {
            code:"99",
            message:"id不能为空"
        }
        return  backData;
    }
    let results = await db.query(UserSQL.getUserById,[params.id]);
    if(results.length !== 0){
         backData = {
            responseBody:results?results[0]:null
        }
    }else{
        backData = {
            "message":"暂无此用户"
        }
    }
   
    //接口返回的数据
    if(method=='DELETE'){
        backData={
            "code":'99',
            "message":"不支持DELETE方法"
        }
    }

    return backData;
};

