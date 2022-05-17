let MYSQL_CONF;

MYSQL_CONF = {
  host: "localhost", //数据库ip
  port: "3036", //端口
  user: "root", //用户明
  password: "123456", //密码
  database: "template", //链接名称
  multipleStatements: true,
  connectionLimit: 10,
};

module.exports = {
  MYSQL_CONF,
};
