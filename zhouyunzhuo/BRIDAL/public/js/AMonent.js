let AMonebtUsers=function(){
    $.ajax({
        type:'get',
        url:'/AMonebtshow',
        data:'',
        success:function(data){
            let body=template('Monent_template',{list:data});
            $('.THEBRIDA_scend').html(body)
        }
    })
}
AMonebtUsers();
