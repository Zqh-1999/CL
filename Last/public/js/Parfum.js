 let ParfumUsers=function(){
    $.ajax({
        type:'get',
        url:'/Parfumshow',
        data:'',
        success:function(data){
            console.log(data)
            let Bride=template('Parfum_template',{list:data});
            $('.THEBRIDA_Nails').html(Bride)
        }
    })
}
ParfumUsers();