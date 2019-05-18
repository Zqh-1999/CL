const conn = require('../data')

// 显示页面
module.exports.search = (req, res) => {
    res.render('lgp-search');
}


// 搜索
module.exports.searchGroom = (req, res) => {
   conn.query('select * from lgpSearch where Groom_names like "%'+req.query.formdata+'%"',(error,result) => {
       if(error) {
           console.log(error);
       } 
      res.json({
          data: result,
          length: result.length
      });
   })
}