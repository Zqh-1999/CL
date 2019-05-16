//引入mysql
const conn = require('../data')

// 显示页面
module.exports.MyOrders = (req, res) => {
    res.render('MyOrders');
}

module.exports.showNamen = (req, res) => {
    conn.query('select * from users where id=?', [req.session.user.id], (err, data) => {
        if (err) {
            return console.log(err)
        }
        res.json(data)

    })
}
