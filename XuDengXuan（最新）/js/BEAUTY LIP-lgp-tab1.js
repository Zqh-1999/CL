$('.contents-son-right-four-second a').click(function () {
    $(this).addClass('click-on-the-event').siblings('.contents-son-right-four-second a')
    .removeClass('contents-son-right-four-third click-on-the-event');
    $('.contents-son-right-four-third div').eq($(this).index())
    .addClass('show-display').siblings('div')
    .removeClass('show-display')
  })