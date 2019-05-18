//引入mysql
const conn = require('../data')

// 显示页面
module.exports.ChangePassword = (req, res) => {
    res.render('ChangePassword');
}

// 修改密码
module.exports.changePassword = (req, res) => {
   if (req.body.oldPassword == req.session.user.password) {
       conn.query('update users set password=? where id=?', [req.body.newPassword, req.session.user.id], (err, data) => {
           if (err) {
               return console.log(err)
           }
           res.json({
               code: '1101',
               msg: '密码修改成功！'
           })
       })

   }
} 