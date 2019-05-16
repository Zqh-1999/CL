//引入mysql
const conn = require('../data')

// 显示页面
module.exports.MyWishlist = (req, res) => {
    res.render('MyWishlist');
}

module.exports.showNameing = (req, res) => {
    conn.query('select * from users where id=?', [req.session.user.id], (err, data) => {
      if (err) {
        return console.log(err)
      }
      res.json(data)
  
    })
  }