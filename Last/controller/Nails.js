const conn=require('../data');
module.exports.Nailsshow=(req,res)=>{
    conn.query('select * from Nails',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}