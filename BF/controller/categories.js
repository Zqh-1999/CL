const mysql = require('../data/index')

// 分类目录页面
module.exports.page = (req, res) => {
  res.render('categories')
}

// 分类显示
module.exports.showCategories = (req, res) => {
  mysql.query('select * from category', (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json(data)
  })
}

// 添加分类目录
module.exports.addCategory = (req, res) => {
  mysql.query('insert into category values(?,?,?)', [null, req.body.name, req.body.slug], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1100',
      msg: '分类目录添加成功'
    })
  })
}

// 删除分类目录
module.exports.deleteCategory = (req, res) => {
  mysql.query('delete from category where cate_id=?', [req.query.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1101',
      msg: '分类目录删除成功'
    })
  })
}

// #region 修改分类目录
// 回显
module.exports.backCategory = (req, res) => {
  mysql.query('select * from category where cate_id=?', [req.query.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json(data)
  })
}

// 修改
module.exports.updateCategory = (req, res) => {
  let qBody = req.body
  mysql.query('update category set cate_name=?, cate_slug=? where cate_id=?', [qBody.name, qBody.slug, qBody.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1102',
      msg: '分类目录修改成功'
    })
  })
}
// #endregion

// 批量删除
module.exports.deleteCategories = (req, res) => {
  console.log(req.query.id)
  mysql.query('delete from category where cate_id in(?)', [req.query.id], (err, data) => {
    if (err) {
      return console.log(err)
    }
    res.json({
      code: '1101',
      msg: '分类目录删除成功'
    })
  })
}