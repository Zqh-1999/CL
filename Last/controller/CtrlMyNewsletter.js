//引入mysql
const conn = require('../data')

// 显示页面
module.exports.MyNewsletter = (req, res) => {
    res.render('MyNewsletter');
}
