const conn=require('../data');

module.exports.showGroom = (req, res) => {
    res.render('Groom')
}

module.exports.Groomshow=(req,res)=>{
    conn.query('select * from groom',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}