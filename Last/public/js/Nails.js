 let NailsUsers=function(){
    $.ajax({
        type:'get',
        url:'/Nailsshow',
        data:'',
        success:function(data){
            console.log(data)
            let Bride=template('Nails_template',{list:data});
            $('.THEBRIDA_Nails').html(Bride)
        }
    })
}
NailsUsers();