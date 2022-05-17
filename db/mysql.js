const mysql = require("mysql2");
const { MYSQL_CONF } = require("../conf/db");

const con = mysql.createPool(MYSQL_CONF); //创建连接池

const exec = (sql) => {
  return new Promise((resolve, reject) => {
    if (!sql) return resolve({});
    con.query(sql, (err, res) => {
      //使用语句查询
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

module.exports = {
  exec,
  escape: mysql.escape,
};
