// 搜索功能



function show5() {
  $('.search').slideDown()
}
function hide5() {
  $('.search').slideUp()
}
var flag = false
$('.fa-search').click(function () {
  if (!flag) {
    show5()
    hide1()
    hide2()
    hide3()
    hide4()
    $('.fa-search').css('color','red')
    flag = true
  } else {
    hide5()
    flag = false
    $('.fa-search').css('color','#333333')
  }
})
$('.search-con button').click(function () {
  hide5()
  $('.fa-search').css('color','#333333')
  flag = false
})
$('.search-con input').click(function () {
  $('.search-con input').attr('placeholder','')
})