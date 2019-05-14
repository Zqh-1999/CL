// 点击询问性质的三个选项
$('.concat_content-nav li').click(function () {
    // 1.1 清除已经有active的元素的class
    // $('.tab li').removeClass('active'); // 清除所有li身上的active
    // $('.products .main').removeClass('selected');
    // 1.2.获取到鼠标移上去的li是第几个
    // $(this).addClass('active');

    $(this).addClass('active').siblings('li').removeClass('active');
    // var index = $(this).index();
    // 1.3.根据获取的li的索引  让对应的div显示
    // $('.products .main').eq(index).addClass('selected');

    $('.concat_content-nature_content .concat_main').eq($(this).index()).addClass('selected').siblings('div').removeClass('selected');
  })