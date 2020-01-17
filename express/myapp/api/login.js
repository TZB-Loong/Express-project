var setToken = require('../config/token_vertify');
exports.getData = async function (method,params) { 
    let backData= {};
    var username = 'slj';
    var userid = '99';
    setToken.setToken(username,userid).then((data)=>{
        return {token:data}
    })

    let tokenData  = setToken.setToken(username,userid);
    
    backData = {
        responseBody:{token:tokenData}
    }

    return backData
 }