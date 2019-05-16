//引入mysql
const conn = require('../data')

// 显示页面
module.exports.ChangePassword = (req, res) => {
    res.render('ChangePassword');
}
