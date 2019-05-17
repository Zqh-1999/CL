const conn=require('../data');

module.exports.showAMonent = (req, res) => {
    res.render('AMonentLikeThie')
}

module.exports.AMonentshow=(req,res)=>{
    conn.query('select * from moment',(error,results)=>{
         if(error){
             console.log(error)
         }else{
               res.json(results)
         }

    })
}