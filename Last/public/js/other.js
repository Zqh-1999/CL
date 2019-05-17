$(function () {
    // 底部input  无关紧要
    $('.contact input').focus(function () {
        $(this).attr('placeholder', '')
    })


    // 头部hover帮助导航栏
    $('.help-a').mouseenter(function () {
        $('.help').show()
        $('.fa-caret-down').css('transform', 'rotate(-178deg)')
    })
    $('.help').mouseleave(function () {
        $('.help').hide()
        $('.fa-caret-down').css('transform', '')
    })

    // 下面是获取网页滚动出去多少 而有的一些指令
    var top1 = document.querySelector('.het-fixed');
    var topHeight = top1.offsetHeight;
    $(window).scroll(function () {
        var docScroll = $(document).scrollTop();
        if (docScroll >= topHeight) {
            // 固定导航栏的高度变化
            $(".het-fixed").css({
                'height': '50px'
            });
            // 搜索的高度变化
            $('.search').css('top', '49px')
            // 下拉高度变化
            $('.women, .man, .beauty').css('margin-top', '0px');
            // 图标左右的外边距变化
            $(".center-left").css("margin-top", '12px');
            $(".center-right").css("margin-top", '12px');
            // 图标的变化
            $('.center-logo').css({
                'transition': 'all 0.5s',
                'width': '50px',
                'height': '50px',
                'lineHeight': '50px'
            })
            $('.center-logo img:nth-child(1)').hide();
            $('.center-logo img:nth-child(2)').show();
            $('.topLeft-list').css('top', '49px')
        } else {
            // 固定导航栏的高度变化
            $(".het-fixed").css({
                'height': '90px'
            });
            // 搜索的高度变化
            $('.search').css('top', '89px')
            // 下拉高度变化
            $('.women, .man, .beauty').css('margin-top', '1px');
            // 图标左右的外边距变化
            $(".center-left").css({
                "margin-top": '40px',
                'transition': 'all 0.5s'
            });
            $(".center-right").css({
                "margin-top": '40px',
                'transition': 'all 0.5s'
            });
            // 图标的变化
            $('.center-logo').css({
                'width': '100px',
                'height': '100px',
                'lineHeight': '94px'
            })
            $('.center-logo img:nth-child(1)').show(600);
            $('.center-logo img:nth-child(2)').hide();
            $('.topLeft-list').css('top', '89px')
        }
        // 这是中间的 网页滚动出去一定高度时 做出的动画
        if (docScroll >= 380) {
            $('.up1').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 560) {
            $('.up2').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 880) {
            $('.up3').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 1260) {
            $('.up4').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 2060) {
            $('.up6').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 2280) {
            $('.up7').css({
              'top': '0px',
              'opacity': 1
            })
          }
          if (docScroll >= 2440) {
            $('.up8').css({
              'top': '0px',
              'opacity': 1
            })
          }
    });


    // 这是头部导航栏的下拉
    function show1() {
        $('.women').slideDown()
        $('.women-good').show()
        $('.fa-search').css('color', '#333333')
    }
    function hide1() {
        $('.women').slideUp(90)
        $('.women-good').hide()
    }
    function show2() {
        $('.man').slideDown()
        $('.man-good').show()
        $('.fa-search').css('color', '#333333')
    }
    function hide2() {
        $('.man').slideUp(90)
        $('.man-good').hide()
    }
    function show3() {
        $('.beauty').slideDown()
        $('.beauty-good').show()
        $('.fa-search').css('color', '#333333')
    }
    function hide3() {
        $('.beauty').slideUp(90)
        $('.beauty-good').hide()
    }
    function show4() {
        $('.bridal').slideDown()
        $('.bridal-good').show()
        $('.fa-search').css('color', '#333333')
    }
    function hide4() {
        $('.bridal').slideUp(90)
        $('.bridal-good').hide()
    }

    function show5() {
        $('.search').slideDown()
    }
    function hide5() {
        $('.search').slideUp()
    }
    
    // 点击搜索按钮 显示隐藏
    $('.fa-search').click(function () {
        if ($('.search').css('display') == 'none') {
            show5()
            hide1()
            hide2()
            hide3()
            hide4()
            $('.search-con input').attr('placeholder', '搜 索')
            $('.search-con input').val('')
            $('.fa-search').css('color', 'red')
        } else if ($('.search').css('display') == 'block') {
            hide5()
            $('.fa-search').css('color', '#333333')
        }
    })
    $('.search-con button').click(function () {
        hide5()
        $('.fa-search').css('color', '#333333')
    })
    $('.search-con input').click(function () {
        $('.search-con input').attr('placeholder', '')
    })


    // 头部下拉导航 women 鼠标移入对应的tab栏让对应的下拉显示 让所有的下拉隐藏
    $('.center-left li:nth-child(1) a').mouseenter(function () {
        show1()
        hide2()
        hide3()
        hide4()
        hide5()
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
        hide5()
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
        hide5()
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
        hide5()
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

    // 
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

    // logo转圈圈
    function SearchAnim(opts) {
        for (var i in SearchAnim.DEFAULTS) {
            if (opts[i] === undefined) {
                opts[i] = SearchAnim.DEFAULTS[i];
            }
        }
        this.opts = opts;
        this.timer = null;
        this.elem = document.getElementById(opts.elemId);
        this.startAnim();
    }
    SearchAnim.prototype.startAnim = function () {
        this.stopAnim();
        this.timer = setInterval(() => {
            var startIndex = this.opts.startIndex;
            if (startIndex == 360) {
                this.opts.startIndex = 0;
            }
            this.elem.style.transform = "rotate(" + (startIndex) + "deg)";
            this.opts.startIndex += 5;
        }, this.opts.delay);
        setTimeout(() => {
            this.stopAnim();
        }, this.opts.duration);
    }
    SearchAnim.prototype.stopAnim = function () {
        if (this.timer != null) {
            clearInterval(this.timer);
        }
    }
    SearchAnim.DEFAULTS = {
        duration: 6000000000,
        delay: 200,
        direction: true,
        startIndex: 0,
        endIndex: 360
    }
    new SearchAnim({
        elemId: "wait-icon",
        delay: 20,
    });


})