const conn=require('../data');
module.exports.Parfumshow=(req,res)=>{
    conn.query('select * from Parfum',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}