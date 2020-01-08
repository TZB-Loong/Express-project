// api/contract.js
   //获取接口信息  localhost:3000/api/contract
var db = require('../db/db');
   var dataDemo={
    'lists':[
        {
            'name':'材料合同',
            'num': '85',
            'allPay':'13659.693万元',
            'share':'88.88%',
            'all':null

        },{
            'name':'劳务合同',
            'num': '85',
            'allPay':'13659.693万元',
            'share':'88.88%',
            'all':'13659.69万元'

        },
        {
            'name':"分包合同",
            'num': '85',
            'allPay':'13659.693万元',
            'share':'88.88%',
            'all':'13659.69万元'

        },
        {
            'name':'其他合同',
            'num': '85',
            'allPay':'13659.693万元',
            'share':'88.88%',
            'all':'13659.69万元'
        },
    ]
}

exports.getData = function(method,params){
    console.log(method,params)
    // db.query('SELECT * FROM user_name WHERE u_id = ?',[params.id],(results,fields)=>{
    //     console.log(results,fields)
    // })
    //接口返回的数据
    if(method=='DELETE'){
        backData={
            "code":'999',
            "msg":"不支持DELETE方法"
        }
    }
    
    // return JSON.stringify(dataDemo);
    return dataDemo

};

