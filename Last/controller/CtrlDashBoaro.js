//引入mysql
const conn = require('../data')

// 显示首页
module.exports.index = (req, res) => {
  res.render("index");
}

// 显示页面
module.exports.DashBoaro = (req, res) => {
  res.render('DashBoaro');
}
