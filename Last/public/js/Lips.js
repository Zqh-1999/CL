 // 发起ajax请求后台数据
 let LipsUsers=function(){
    $.ajax({
        type:'get',
        url:'/LipsUsers',
        data:'',
        success:function(data){
            console.log(data)
            let Bride=template('Lips_template',{list:data});
            $('.THEBRIDA_Nails').html(Bride)
        }
    })
}
LipsUsers();