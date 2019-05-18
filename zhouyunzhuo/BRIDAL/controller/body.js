const conn=require('../data');

module.exports.showbody = (req, res) => {
    res.render('body')
}

module.exports.bodyshow=(req,res)=>{
    conn.query('select * from body',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}