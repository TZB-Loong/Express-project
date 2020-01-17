var db = require('../db/db');
var UserSQL = require('../db/usersql');
exports.getData = async function (method, params) {

  let results = await db.query(UserSQL.insert, [params.openid, params.username]);
  //  http://localhost:3000/api/addUser?openid=1223w&username=%E5%BE%90%E5%A4%A7%E5%93%A5&pwd=2313122312w&type=0

  return results
}
