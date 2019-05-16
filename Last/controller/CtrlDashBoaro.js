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


module.exports.showNameS = (req, res) => {
  conn.query('select * from users where id=?', [req.session.user.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json(data)

  })
}