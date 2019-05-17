const conn=require('../data');
module.exports.LipsUsers=(req,res)=>{
    conn.query('select * from Lips',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}