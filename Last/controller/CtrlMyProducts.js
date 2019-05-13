//引入mysql
const conn = require('../data')

// 显示页面
module.exports.MyProducts = (req, res) => {
    res.render('MyProducts');
}
