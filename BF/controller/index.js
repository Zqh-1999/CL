const mysql = require('../data/index')

// 后台首页
module.exports.BEIndex = (req, res) => {
  if (!req.session.isLogin) {
    res.redirect('/admin/login')
  }
  res.render('index')
}