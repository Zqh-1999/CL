const conn=require('../data');

module.exports.showBrida = (req, res) => {
    res.render('BRIDA')
}

module.exports.Brideshow=(req,res)=>{
    conn.query('select * from bride',(error,results)=>{
         if(error){
             console.log(error)
         }else{
             res.json(results)
         }

    })
}
//鞋子大小
module.exports.Bridesize=(req,res)=>{
    //鞋子大小
    let size=req.query.size;
    //颜色
    let colors=req.query.colors
    // 鞋高
    let height1=req.query.height1;
    let height2=req.query.height2;
    //材质
    let mater=req.query.mater;
    if( colors=='' && height1=='' && height2=='' && mater==''){
        conn.query('select * from bride where Bride_size='+ size,(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.json(results)
            }
        })
    }
    else if( colors!='' && height1=='' && height2=='' && mater==''){
        conn.query('select * from bride where Bride_size=? and Bride_color=?',[size,colors],(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.json(results)
            }
        })
    }else if(colors=='' && height1!='' && height2!='' && mater==''){
        conn.query('select * from bride where Bride_size='+size+' and Bride_height>'+height1+ ' and  Bride_height<'+height2,(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.json(results)
            }
        })
    }else if(colors=='' && height1=='' && height2=='' && mater!=''){
            conn.query('select * from bride where Bride_size=? and Bride_Material=?',[size,mater],(error,results)=>{
                if(error){
                    console.log(error)
                }else{
                    res.json(results)
                }
            })
    }else if( colors!='' && height1!='' && height2!='' && mater==''){
            let to=[req.query.size,req.query.colors,req.query.height1,req.query.height2]
                conn.query('select * from bride where Bride_size=? and Bride_color=? and Bride_height>? and  Bride_height<?',to,(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.json(results)
                    }
                })
    }else if( colors!='' && height1!='' && height2!='' && mater!=''){
                let con=[req.query.size,req.query.colors,req.query.height1,req.query.height2,req.query.mater]
                        conn.query('select * from bride where Bride_size=? and Bride_color=? and Bride_height>? and Bride_height<? and Bride_Material=?',con,(error,results)=>{
                            if(error){
                                console.log(error)
                            }else{
                                res.json(results)
              }
         })
    }
}



module.exports.Bridecolor=(req,res)=>{ 
    console.log(req.query.colors)
    conn.query('select * from bride where Bride_color=?',[req.query.colors] ,(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
}
module.exports.Brideheight=(req,res)=>{
    let height1=req.query.height1;
    let height2=req.query.height2
    console.log(height1);
    console.log(height2)
    conn.query('select * from bride where Bride_height>'+height1+' and Bride_height<'+height2 ,(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
}

module.exports.Bridematerials=(req,res)=>{
    console.log(req.query.materials)
    conn.query('select * from bride where Bride_Material=?' ,[req.query.materials] ,(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
}