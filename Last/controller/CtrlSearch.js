const conn = require('../data')

// 显示页面
module.exports.search = (req, res) => {
    res.render('lgp-search');
}

module.exports.searchGroom = (req, res) => {
    // let parmas = 'select * from Groom where Groom_names like %'+req.query.formdata+'%';
   
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