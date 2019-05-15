$(function () {
    var nav = $(".stopfake_content #nav");
    var mainPage = $(".mainPage");
    var mainTopArr = new Array();
    
    for(var i=0;i<mainPage.length;i++){
        var top = mainPage.eq(i).offset().top;
        mainTopArr.push(top);
    }
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var k;
        for(var i=0;i<mainTopArr.length;i++){
            if(scrollTop>=mainTopArr[i]){
                k=i;
            }
        }
        nav.find("a").eq(k).addClass("active").siblings().removeClass("active");
    });
    nav.find("a[href^='#']").click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 400);
    });
});
/* 点击联系stopfake团队 */
$('#page1 .page1-a').click(function(){
    $('#page1 .page1-input').css('display', 'block');
    console.log(11)
})
$('#page1 .page1-collapse').click(function(){
    $('#page1 .page1-input').css('display', 'none');
    console.log(11)
})