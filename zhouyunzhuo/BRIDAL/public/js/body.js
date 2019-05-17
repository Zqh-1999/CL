let bodyUsers=function(){
    $.ajax({
        type:'get',
        url:'/bodyshow',
        data:'',
        success:function(data){
            console.log(data)
            let body=template('body_template',{list:data});
            $('.THEBRIDA_scend').html(body)
        }
    })
}
bodyUsers();
