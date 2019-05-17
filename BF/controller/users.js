const mysql = require('../data')

// 用户页面
module.exports.BEUsers = (req, res) => {
  res.render('users')
}

// 用户显示
module.exports.BFShowUsers = (req, res) => {
  mysql.query('select * from users', (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json(data)
  })
}

// 用户添加
module.exports.BEAddUser = (req, res) => {
  mysql.query('insert into users value(?,?,?,?,?,?,?)', [null, '/uploads/avatar_1.jpg', req.body.email, req.body.slug, req.body.nickname, 'activated', req.body.password], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1001',
      msg: '添加成功'
    })
  })
}

// 删除用户
module.exports.BEDeleteUser = (req, res) => {
  mysql.query('delete from users where id=?', [req.query.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1002',
      msg: '删除成功'
    })
  })
}

// 修改用户 回显
module.exports.BEBackUser = (req, res) => {
  mysql.query('select * from users where id=?', req.query.id, (err, data) => {
    if (err){
      return console.log(err)
    }
    res.json(data)
  })
}

// 修改用户 修改
module.exports.BEUpdataUser = (req, res) => {
  let reqbody = req.body
  let bodyArr = [reqbody.email, reqbody.slug, reqbody.nickname, reqbody.password, reqbody.id]
  mysql.query('update users set email=?, firstName=?, lastName=?, password=? where id=?', bodyArr, (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1003',
      msg: '修改成功'
    })
  })
}

// 批量删除
module.exports.BEDeleteUsers = (req, res) => {
  console.log(req.query.id)
  mysql.query('delete from users where id in (?)', [req.query.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1002',
      msg: '删除成功'
    })
  })
}