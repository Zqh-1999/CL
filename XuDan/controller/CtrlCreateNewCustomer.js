//引入mysql
const conn = require('../data')

module.exports.adder = (req, res) => {
  res.render('CreateNewCustomer');
}
  
module.exports.BEUserAdd = (req, res) => {
  let sqlData = [null, req.body.email, req.body.slug, req.body.nickname, 'activated', req.body.password];
  let sql = 'insert into users values (?,?,?,?,?,?,?);'
  console.log(req.body);
  conn.query(sql, sqlData, (error, results) => {
    if (error) {
      return console.log(error);
    }

    // console.log(results);
    if (results.affectedRows) {
      res.json({
        code: '1001',
        message: '用户添加成功'
      })
    }
  })
}
  // #endregion