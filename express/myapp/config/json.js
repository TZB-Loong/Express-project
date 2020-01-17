// 几种特定的提示语
var json = function(res,result){
    res.json({
        code:'0',
        message:"交易成功",
        ...result
    })
};
module.exports = json;