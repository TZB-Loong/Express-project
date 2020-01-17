var UserSQL ={
    /**
     * @param 提供增删改查sql语句
     */
    insert:'INSERT INTO user_info(open_id,user_name)  VALUES(?,?)',
    queryAll:'SELECT * FROM User',
    getUserById:'SELECT * FROM user_info WHERE u_id = ?',
}
module.exports = UserSQL;