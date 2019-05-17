const mysql = require('../data/index')

// 后台登录页面
module.exports.BELogin = (req, res) => {
  res.render('login');
}

// 登陆判断
module.exports.adminLogin = (req, res) => {
  mysql.query('select * from superUser where email=? and password=?', [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return console.log(err)
    }
    if (data.length == 0) {
      res.json({
        code: '1200',
        msg: '您的密码或邮箱有误'
      })
    } else {
      req.session.isLogin = true
      res.json({
        code: '1201',
        msg: '登陆成功'
      })
    }
  })
}

