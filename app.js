const express = require("express");
const app = express();
const uerRouter = require("./routes/userRouter");
// req.body模块
const bodyParser = require("body-parser");
// 配置req.body
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);

// user下的接口
app.use("/user", uerRouter);
app.listen(9090, () => {
  console.log(9090);
});
