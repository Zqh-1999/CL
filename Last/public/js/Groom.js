// 发起ajax请求后台数据
let GroomUsers=function(){
    $.ajax({
        type:'get',
        url:'/Groomshow',
        data:'',
        success:function(data){
            console.log(data)
            let Bride=template('Groom_template',{list:data});
            $('.THEBRIDA_scend').html(Bride)
        }
    })
}
GroomUsers();