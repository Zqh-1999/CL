const conn=require('../data');
//显示模板内容
module.exports.LipsUsers=(req,res)=>{
    conn.query('select * from Lips',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}