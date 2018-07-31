var UserSQL ={
    /**
     * @param 提供增删改查sql语句
     */
    insert:'INSERT INTO User(uid,userName) VALUES(?,?)',
    queryAll:'SELECT * FROM User',
    getUserById:'SELECT * FROM User WHERE uid = ?',
}
module.exports = UserSQL;