const conn = require('../data');
const fs = require('fs');

// #region 显示 文章发表页面
module.exports.postAddPage = (req, res) => {
  if (!req.session.isLogin) {
    res.redirect('/admin/login');
    return;
  }
    res.render('post-add');
}
// #endregion

// #region 文章发表 图片上传
module.exports.postAddUpload = (req, res) => {

  fs.writeFile('./public/images/' + req.file.originalname, req.file.buffer, (error) => {
    if (error) {
      return console.log(error);
    }

    res.json({
      picAddr:  req.file.originalname
    })
  })
}
// #endregion

// #region 添加文章
module.exports.postAddArticle = (req, res) => {
  // console.log(req.body);
  // console.log(req.session.user.id);
  let params = [req.body.title, req.body.feature, req.body.feature, null];
  let sql = 'insert into lgpSearch values(?,?,?,?)';
  conn.query(sql, params, (error, results) => {
    if (error) return console.log(error);

    // console.log(results);
    if (results.affectedRows) {
      res.json({
        code: '1401',
        message: "文章添加成功"
      })
    }
  })
}
// #endregion