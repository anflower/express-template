const { exec, escape } = require("../db/mysql");

const handleSign = async (username, password) => {
  //语句查询
  let ifExistSql = `
              select username from user where username = ${escape(
                username
              )} and password = ${escape(password)}
      `;
  let ifExistRes = await exec(ifExistSql);
  return ifExistRes.length > 0;
};

module.exports = {
  handleSign,
};
