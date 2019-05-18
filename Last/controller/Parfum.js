const conn=require('../data');
//显示模板内容
module.exports.Parfumshow=(req,res)=>{
    conn.query('select * from Parfum',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}