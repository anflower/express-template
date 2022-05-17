const router = require("express").Router();
const { handleSign } = require("../controller/user");

// 登录
router.post("/signin", async (req, res, next) => {
  //获取接口中字段 准备查询
  try {
    let { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({
        result: "请填写正确信息",
      });
    let signRes = await handleSign(username, password);
    if (!signRes)
      return res.status(400).json({
        result: "登陆失败！",
      });
    req.session.username = username;
    return res.json({
      result: "登录成功",
    });
  } catch (e) {
    return res.status(400).json({
      error: "error",
    });
  }
});

module.exports = router;
