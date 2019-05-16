function left_btn(){
    var i;
    var l = $(".small_list").find("ul li").length;
    $(".small_list").find("ul li").each(function(index){
        if($(this).hasClass("on")){
            i = index;
        }
    });
    i--;
    if(i < 0){
        i = l - 1;
    }
    t = i;
    Img(i)
};

/* 右按钮 */
function right_btn(){
    var i;
    var l = $(".small_list").find("ul li").length;
    $(".small_list").find("ul li").each(function(index){
        if($(this).hasClass("on")){
            i = index;
        }
    });
    i++;
    if(i > l-1){
        i = 0;
    }
    t = i;
    Img(i);
};

/* 图片 */
function Img(i){
    var l = $(".small_list").find("ul li").length;
    var l_mean;
    if(l < 5){
        l_mean = 0;
    }else{
        l_mean = ((parseInt(l / 5) - 1) * 5) + (l % 5);
    }
    var w = 110;
    $(".large_box").find("ul li").eq(i).fadeIn().siblings().hide();
    $(".small_list").find("ul li").eq(i).addClass("on").siblings().removeClass("on");
    var ml = i * w;
    if(ml <= l_mean * w){
        $(".small_list").find("ul").stop().animate({
            marginLeft: -ml + "px"
        })
    }else{
        $(".small_list").find("ul").stop().animate({
            marginLeft: -(l_mean * w) + "px"
        })
    }
}