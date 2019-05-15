$(function () {
    // 底部input
    $('.contact input').focus(function () {
        $(this).attr('placeholder', '')
    })


    // 头部hover帮助
    $('.help-a').mouseenter(function () {
        $('.help').show()
        $('.fa-caret-down').css('transform', 'rotate(-178deg)')
    })
    $('.help').mouseleave(function () {
        $('.help').hide()
        $('.fa-caret-down').css('transform', '')
    })

    // 固定导航栏 变化
    var top1 = document.querySelector('.het-fixed');
    var topHeight = top1.offsetHeight;
    console.log(topHeight)
    $(window).scroll(function () {
        var docScroll = $(document).scrollTop();
        if (docScroll >= topHeight) {
            $(".het-fixed").css({
                'height': '50px'
            });
            $(".center-left").css("margin-top", '12px');
            $(".center-right").css("margin-top", '12px');
            $('.center-logo').css({
                'width': '50px',
                'height': '50px',
                'lineHeight': '50px'
            })
            $('.center-logo img:nth-child(1)').hide();
            $('.center-logo img:nth-child(2)').show();
            $('.topLeft-list').css('top', '49px')
        } else {
            $(".het-fixed").css({
                'height': '90px'
            });
            $(".center-left").css("margin-top", '40px');
            $(".center-right").css("margin-top", '40px');
            $('.center-logo').css({
                'width': '100px',
                'height': '100px',
                'lineHeight': '94px'
            })
            $('.center-logo img:nth-child(1)').show(600);
            $('.center-logo img:nth-child(2)').hide();
            $('.topLeft-list').css('top', '89px')
        }
        if (docScroll >= 300) {
            $('.up1').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 460) {
            $('.up2').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 680) {
            $('.up3').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 1060) {
            $('.up4').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 2960) {
            $('.up6').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 3200) {
            $('.up7').css({
                'top': '0px',
                'opacity': 1
            })
        }
        if (docScroll >= 3280) {
            $('.up8').css({
                'top': '0px',
                'opacity': 1
            })
        }
    });


    var flag = true
    var flag1 = true
    function show1() {
        $('.women').slideDown()
        $('.women-good').show()
    }
    function hide1() {
        $('.women').slideUp(90)
        $('.women-good').hide()
    }
    function show2() {
        $('.man').slideDown()
        $('.man-good').show()
    }
    function hide2() {
        $('.man').slideUp(90)
        $('.man-good').hide()
    }
    function show3() {
        $('.beauty').slideDown()
        $('.beauty-good').show()
    }
    function hide3() {
        $('.beauty').slideUp(90)
        $('.beauty-good').hide()
    }
    function show4() {
        $('.bridal').slideDown()
        $('.bridal-good').show()
    }
    function hide4() {
        $('.bridal').slideUp(90)
        $('.bridal-good').hide()
    }
    // 头部下拉导航 women 鼠标移入对应的tab栏让对应的下拉显示 让所有的下拉隐藏
    $('.center-left li:nth-child(1) a').mouseenter(function () {
        show1()
        hide2()
        hide3()
    })
    // 鼠标移出下拉 隐藏
    $('.topLeft-list').mouseleave(function () {
        hide1()
    })

    // 头部下拉导航 man 鼠标移入对应的tab栏让对应的下拉显示 让所有的下拉隐藏
    $('.center-left li:nth-child(2) a').mouseenter(function () {
        show2()
        hide1()
        hide3()
        hide4()
    })
    // 鼠标移出下拉 隐藏
    $('.topLeft-list').mouseleave(function () {
        hide2()
    })

    // 头部下拉导航 beauty 鼠标移入对应的tab栏让对应的下拉显示 让所有的下拉隐藏
    $('.center-right li:nth-child(1) a').mouseenter(function () {
        show3()
        hide1()
        hide2()
        hide4()
    })
    // 鼠标移出下拉 隐藏
    $('.topLeft-list').mouseleave(function () {
        hide3()
    })

    // 头部下拉导航 man 鼠标移入对应的tab栏让对应的下拉显示 让所有的下拉隐藏
    $('.center-left li:nth-child(3) a').mouseenter(function () {
        show4()
        hide1()
        hide2()
        hide3()
    })
    // 鼠标移出下拉 隐藏
    $('.topLeft-list').mouseleave(function () {
        hide4()
    })

    $('.center-right li:nth-child(2) a').mouseenter(function () {
        hide1()
        hide2()
        hide3()
        hide4()
    })
})

function poRandom(ele) {
    var timId;
    $(ele).mouseenter(function () {
      $(ele + ' span a').css('color', 'white')
      timId = setInterval(function () {
        var imgWhidth = document.body.offsetWidth
        var max = Math.floor(Math.random() * 8 + 1)
        var popx = imgWhidth * max + 'px'
        $(ele).css('backgroundPosition', popx)
      }, 300)
    })
    $(ele).mouseleave(function () {
      $(ele + ' span a').css('color', 'black')
      clearInterval(timId)
    })
  }
  poRandom('.area li:nth-child(1)')
  poRandom('.area li:nth-child(2)')
  poRandom('.area li:nth-child(3)')
  poRandom('.area li:nth-child(4)')
  poRandom('.area li:nth-child(5)')
  poRandom('.area li:nth-child(6)')

