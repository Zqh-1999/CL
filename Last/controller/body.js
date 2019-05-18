const conn=require('../data');
//显示页面
module.exports.showbody = (req, res) => {
    res.render('body')
}
//导入数据 显示模板
module.exports.bodyshow=(req,res)=>{
    conn.query('select * from body',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}