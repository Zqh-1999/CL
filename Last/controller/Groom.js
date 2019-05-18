const conn=require('../data');
//显示页面
module.exports.showGroom = (req, res) => {
    res.render('Groom')
}
// 导入数据 显示
module.exports.Groomshow=(req,res)=>{
    conn.query('select * from groom',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}