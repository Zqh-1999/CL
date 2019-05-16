// 搜索功能



function show5() {
  $('.search').slideDown()
}
function hide5() {
  $('.search').slideUp()
}
$('.fa-search').click(function () {
  if ($('.search').css('display') == 'none') {
    show5()
    hide1()
    hide2()
    hide3()
    hide4()
    $('.search-con input').attr('placeholder','搜 索')
    $('.search-con input').val('')
    $('.fa-search').css('color','red')
  } else  if($('.search').css('display') == 'block'){
    hide5()
    $('.fa-search').css('color','#333333')
  }
})
$('.search-con button').click(function () {
  hide5()
  $('.fa-search').css('color','#333333')
})
$('.search-con input').click(function () {
  $('.search-con input').attr('placeholder','')
})