
//右侧商品导航显示
$('.THEBRIDA_first_right .classify').mouseenter(function(){
    $(this).find('.second').css('display','block')
})
//右侧商品导航隐藏
$('.THEBRIDA_first_right .classify').mouseleave(function(){
    $(this).find('.second').css('display','none');
})

//显示新娘页面
let BrideUsers=function(){
    $.ajax({
        type:'get',
        url:'/Brideshow',
        data:'',
        success:function(data){
            let Bride=template('Brida_template',{list:data});
            $('.THEBRIDA_scend').html(Bride)
        }
    })
}
BrideUsers();

// 查询鞋子
$('.THEBRIDA_first_right .second .fist li').on('click',function(){
    //获取选中鞋子大小
    let size =$(this).find('a').text(); 
    $('.THEBRIDA_first_right .second .fist li').find('i').css('background-color','white');
    //li删除自定义属性
    $('.THEBRIDA_first_right .second .fist li').removeProp('class');
    $(this).find('i').css('background-color','orange');
    //给当前li添加自定义属性
     $(this).attr( 'class' ,'size' );
    //获取其他li是否有被选中
    //获取被选中颜色的值
     let colors=$('.THEBRIDA_first_right .second .colors').find('a').text();
     //获取高度的值
     let heights=$('.THEBRIDA_first_right .second .heights');
     let height1 =heights.find('a').find('.em1').text(); 
     let height2 =heights.find('a').find('.em2').text(); 
     //获取才材料的值
     let mater=$('.THEBRIDA_first_right .second .mater').find('a').text();
     console.log(colors)
    //ajax请求
     $.ajax({
         type:'get',
         url:'/Bridesize',
         data:{
             size:size,
             colors:colors,
             height1:height1,
             height2:height2,
             mater:mater
        },
         success:function(data){
            let Bride=template('Brida_template',{list:data});
            $('.THEBRIDA_scend').html(Bride)
         }
     })
})


//查询颜色
$('.THEBRIDA_first_right .color li').on('click',function(){
    $('.THEBRIDA_first_right .color li').find('i').css('background-color','white');
    //li删除自定义属性
    $('.THEBRIDA_first_right .color li').removeProp('class');
    $(this).find('i').css('background-color','orange');
    //给当前li添加自定义属性
    $(this).attr( 'class' ,'colors' );
    let colors =$(this).find('a').text(); 
    $.ajax({
        type:'get',
        url:'/Bridecolor',
        data:{colors:colors,},
        success:function(data){
           let Bride=template('Brida_template',{list:data});
           $('.THEBRIDA_scend').html(Bride)
        }
    })
})


//查询鞋跟
$('.THEBRIDA_first_right .height li').on('click',function(){
    //鞋高
    let height1 =$(this).find('a').find('.em1').text(); 
    let height2 =$(this).find('a').find('.em2').text(); 
    //li删除自定义属性
    $('.THEBRIDA_first_right .second .fist li').removeProp('class');
    //给当前li添加自定义属性
    $(this).attr( 'class' ,'heights' );
    $.ajax({
        type:'get',
        url:'/Brideheight',
        data:{
            height1:height1,
            height2:height2,
        },
        success:function(data){
            let Bride=template('Brida_template',{list:data});
            $('.THEBRIDA_scend').html(Bride)
        }
    })
})


// 查询材质
$('.THEBRIDA_first_right .materials li').on('click',function(){
    let materials=$(this).find('a').text();
    //li删除自定义属性
    $('.THEBRIDA_first_right .second .fist li').removeProp('class');
    //给当前li添加自定义属性
    $(this).attr( 'class' ,'mater' );
    $('.THEBRIDA_first_right .materials li').find('i').css('background-color','white');
    $(this).find('i').css('background-color','orange');
    $.ajax({
        type:'get',
        url:'/Bridematerials',
        data:{
           materials:materials
        },
        success:function(data){
            let Bride=template('Brida_template',{list:data});
            $('.THEBRIDA_scend').html(Bride)
        }
    })
})

