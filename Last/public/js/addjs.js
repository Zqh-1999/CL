
$('.new-list').mouseenter(function () {
  $(('.new-right')).css({
    'transition': 'all 0.4s',
    'backgroundColor': '#fff'
  })
  $(('.new-left')).css({
    'transition': 'all 0.4s',
    'opacity': '0.7'
  })
  $(this).find('.new-right').css('backgroundColor', '#f6f6f6')
  $(this).find('.new-left').css('opacity', '1')
})