
// 点击订单在线
$('.helpProblem_nav_onlineOrder').click(function () {
    $('.helpProblem_nav_contact button').css('display', 'none');
    $('.onlineOrder-tab').css('display', 'block');
    $('.goods-tab').css('display', 'none');
    $('.return-tab').css('display', 'none');
    $('.boutique-tab').css('display', 'none');
    $('.someProblems-tab').css('display', 'none');
    $('.onlineOrder-nav-order').css('color', 'black');
})
var aBtn = document.querySelectorAll(".onlineOrder-nav a");
// console.log(aBtn);
// 2.遍历每个a标签
for (var i = 0; i < aBtn.length; i++) {
    // 3.给a标签添加点击事件
    aBtn[i].onclick = function () {
        // 4. 让a标签对应的section让它隐藏 让有active的a标签 没有active 
        // 4.1 获取含有active的class的a标签
        var activeA = document.querySelector('.active');
        // 4.2 获取上面a标签身上的cont属性的值
        var con = activeA.getAttribute('cont'); // 'gn'
        // console.log(con);
        // 4.3 通过上面获取的值 找到对应的section 让它隐藏
        document.getElementById(con).style.display = "none";
        // 4.4 移除a标签上的active类名
        activeA.removeAttribute('class');
        // 5.让点击的那个a标签加一个active的class   让点击的a标签对应的那个section显示
        // 5.1 给点击的那个a标签设置一个class为active
        this.className = 'active';
        // 5.2 获取点击的那个a标签上的cont属性的值
        var cont = this.getAttribute('cont');
        // 5.3 根据cont属性的值获取对应的section 让其 显示
        document.getElementById(cont).style.display = 'block';
    }

}
// 点击返回
$('.helpProblem_nav_return').click(function () {
    $('.helpProblem_nav_contact button').css('display', 'none');
    $('.onlineOrder-tab').css('display', 'none');
    $('.goods-tab').css('display', 'none');
    $('.return-tab').css('display', 'block');
    $('.boutique-tab').css('display', 'none');
    $('.someProblems-tab').css('display', 'none');
})
// 点击制品
$('.helpProblem_nav_goods').click(function () {
    $('.helpProblem_nav_contact button').css('display', 'none');
    $('.return-tab').css('display', 'none');
    $('.onlineOrder-tab').css('display', 'none');
    $('.goods-tab').css('display', 'block');
    $('.boutique-tab').css('display', 'none');
    $('.someProblems-tab').css('display', 'none');
})
// 点击精品店
$('.helpProblem_nav_boutique').click(function () {
    $('.helpProblem_nav_contact button').css('display', 'none');
    $('.return-tab').css('display', 'none');
    $('.onlineOrder-tab').css('display', 'none');
    $('.goods-tab').css('display', 'none');
    $('.boutique-tab').css('display', 'block');
    $('.someProblems-tab').css('display', 'none');
})
// 点击一些问题
$('.helpProblem_nav_someProblems').click(function () {
    $('.helpProblem_nav_contact button').css('display', 'none');
    $('.return-tab').css('display', 'none');
    $('.onlineOrder-tab').css('display', 'none');
    $('.goods-tab').css('display', 'none');
    $('.boutique-tab').css('display', 'none');
    $('.someProblems-tab').css('display', 'block');
})
// 点击内容展示内容
$('.onlineOrder-content>div>ul>li').click(function () {
    $(this).children('ol').show(200);
    $(this).siblings('li').children('ol').hide(200);
})
$('.return-content>div>ul>li').click(function () {
    $(this).children('ol').show(200);
    $(this).siblings('li').children('ol').hide(200);
})
$('.goods-content>div>ul>li').click(function () {
    $(this).children('ol').show(200);
    $(this).siblings('li').children('ol').hide(200);
})
$('.boutique-content>div>ul>li').click(function () {
    $(this).children('ol').show(200);
    $(this).siblings('li').children('ol').hide(200);
})
$('.someProblems-content>div>ul>li').click(function () {
    $(this).children('ol').show(200);
    $(this).siblings('li').children('ol').hide(200);
})
// 页面滚动
$(".helpProblem_nav_onlineOrder").click(function () {
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    $("html,body").animate({
        scrollTop: h + 600
    }, 800); //点击按钮向下移动800px，时间为800毫秒
});
$(".helpProblem_nav_return").click(function () {
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    $("html,body").animate({
        scrollTop: h + 600
    }, 800); //点击按钮向下移动800px，时间为800毫秒
});
$(".helpProblem_nav_goods").click(function () {
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    $("html,body").animate({
        scrollTop: h + 600
    }, 800); //点击按钮向下移动800px，时间为800毫秒
});
$(".helpProblem_nav_boutique").click(function () {
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    $("html,body").animate({
        scrollTop: h + 600
    }, 800); //点击按钮向下移动800px，时间为800毫秒
});
$(".helpProblem_nav_someProblems").click(function () {
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    $("html,body").animate({
        scrollTop: h + 600
    }, 800); //点击按钮向下移动800px，时间为800毫秒
});
