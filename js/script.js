$(function() {

    //버튼 클릭
    $('.defaulton').click(function() {
        $(this).css('background', '#a70638').css('color', 'white');
        $('.default').css('background', 'none').css('color', '#555');
    })
    $('.default').click(function() {
        $(this).css('background', '#a70638').css('color', 'white');
        $('.defaulton').css('background', 'none').css('color', '#555');
    })


    $(function() {
        $('.frclick1').click(function() {
            $(this).css('background', '#a70638').css('color', 'white');
            $('.frclick2').css('background', 'none').css('color', '#555');
            $('.frclick3').css('background', 'none').css('color', '#555');
            $('.frclick4').css('background', 'none').css('color', '#555');
        })
        $('.frclick2').click(function() {
            $(this).css('background', '#a70638').css('color', 'white');
            $('.frclick1').css('background', 'none').css('color', '#555');
            $('.frclick3').css('background', 'none').css('color', '#555');
            $('.frclick4').css('background', 'none').css('color', '#555');
        })
        $('.frclick3').click(function() {
            $(this).css('background', '#a70638').css('color', 'white');
            $('.frclick1').css('background', 'none').css('color', '#555');
            $('.frclick2').css('background', 'none').css('color', '#555');
            $('.frclick4').css('background', 'none').css('color', '#555');
        })
        $('.frclick4').click(function() {
            $(this).css('background', '#a70638').css('color', 'white');
            $('.frclick1').css('background', 'none').css('color', '#555');
            $('.frclick2').css('background', 'none').css('color', '#555');
            $('.frclick3').css('background', 'none').css('color', '#555');
        })
    })

    $('.auto_slider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        speed: 500,
        pause: 4000,
        autoHover: true,
        autoControls: true,
    });



    $('.multi_slider').bxSlider({
        minSlides: 2, //브라우저의크기가 작아질때 슬라이더최소갯수
        maxSlides: 4,
        moveSlides: 1, //한번에 움직일 슬라이드 갯수
        slideWidth: 356, //슬라이드너비
        slideMargin: 30, //슬라이드간격

    });

    $('.multi_slider2').bxSlider({
        auto: true, //자동전환
        stopAutoOnClick: true,
        speed: 500, //슬라이드 전환속도
        pause: 3000, //자동실행 전환사이의 시간설정
        minSlides: 2, //브라우저의크기가 작아질때 슬라이더최소갯수
        maxSlides: 5,
        moveSlides: 1, //한번에 움직일 슬라이드 갯수
        slideWidth: 280, //슬라이드너비
        slideMargin: 18, //슬라이드간격

    });


    $('.nBtn1').click(function() {
        $('.nBtn1').addClass('on');
        $('.nBtn2').removeClass('on');
        $('.nBtn3').removeClass('on');
    })

    $('.nBtn2').click(function() {
        $('.nBtn2').addClass('on');
        $('.nBtn1').removeClass('on');
        $('.nBtn3').removeClass('on');
    })
    $('.nBtn3').click(function() {
        $('.nBtn3').addClass('on');
        $('.nBtn1').removeClass('on');
        $('.nBtn2').removeClass('on');
    });



    // menu hover


    var $window = $(window);
    var $nav = $('#nav li');

    $nav.hover(
        function() {
            $('#top').addClass('bg');
            $('#top>ul>li>a').addClass('bg');
            $('#menu>#lnb').addClass('bg');
            $('#nav li>a').addClass('bg');
            $('#logo>a').addClass('bg');
            $('#gnb .gnb_btn .top_airport').addClass('bg');
            $('#gnb .top_search_btn').addClass('bg');
            $('.top_popup>button').addClass('bg');
            $('#width100').addClass('bg');
        },
        function() {
            $('#top').removeClass('bg');
            $('#top>ul>li>a').removeClass('bg');
            $('#menu>#lnb').removeClass('bg');
            $('#nav li>a').removeClass('bg');
            $('#logo>a').removeClass('bg');
            $('#gnb .gnb_btn .top_airport').removeClass('bg');
            $('#gnb .top_search_btn').removeClass('bg');
            $('.top_popup>button').removeClass('bg');
            $('#width100').removeClass('bg');

        });
    $window.scroll(function() {
        var sct = $window.scrollTop();
        if (sct > 10) {
            $('#top').addClass('bg');
            $('#top>ul>li>a').addClass('bg');
            $('#menu>#lnb').addClass('bg');
            $('#nav li>a').addClass('bg');
            $('#logo>a').addClass('bg');
            $('#gnb .gnb_btn .top_airport').addClass('bg');
            $('#gnb .top_search_btn').addClass('bg');
            $('.top_popup>button').addClass('bg');
            $nav.hover(
                function() {
                    $('#top').addClass('bg');
                    $('#top>ul>li>a').addClass('bg');
                    $('#menu>#lnb').addClass('bg');
                    $('#nav li>a').addClass('bg');
                    $('#logo>a').addClass('bg');
                    $('#gnb .gnb_btn .top_airport').addClass('bg');
                    $('#gnb .top_search_btn').addClass('bg');
                    $('.top_popup>button').addClass('bg');
                },
                function() {
                    $('#top').addClass('bg');
                    $('#top>ul>li>a').addClass('bg');
                    $('#menu>#lnb').addClass('bg');
                    $('#nav li>a').addClass('bg');
                    $('#logo>a').addClass('bg');
                    $('#gnb .gnb_btn .top_airport').addClass('bg');
                    $('#gnb .top_search_btn').addClass('bg');
                    $('.top_popup>button').addClass('bg');
                });
        } else {
            $('#top').removeClass('bg');
            $('#top>ul>li>a').removeClass('bg');
            $('#menu>#lnb').removeClass('bg');
            $('#nav li>a').removeClass('bg');
            $('#logo>a').removeClass('bg');
            $('#gnb .gnb_btn .top_airport').removeClass('bg');
            $('#gnb .top_search_btn').removeClass('bg');
            $('.top_popup>button').removeClass('bg');
            $nav.hover(
                function() {
                    $('#top').addClass('bg');
                    $('#top>ul>li>a').addClass('bg');
                    $('#menu>#lnb').addClass('bg');
                    $('#nav li>a').addClass('bg');
                    $('#logo>a').addClass('bg');
                    $('#gnb .gnb_btn .top_airport').addClass('bg');
                    $('#gnb .top_search_btn').addClass('bg');
                    $('.top_popup>button').addClass('bg');
                },
                function() {
                    $('#top').removeClass('bg');
                    $('#top>ul>li>a').removeClass('bg');
                    $('#menu>#lnb').removeClass('bg');
                    $('#nav li>a').removeClass('bg');
                    $('#logo>a').removeClass('bg');
                    $('#gnb .gnb_btn .top_airport').removeClass('bg');
                    $('#gnb .top_search_btn').removeClass('bg');
                    $('.top_popup>button').removeClass('bg');
                });
        }


    })

    /* 맵 */
    var mapPt = [];
    var rightTxt = [];
    mapPt = $('.mapPt>a');
    rightTxt = $('.rightTxt>div');
    mapPt.click(function() {
        var tg = $(this);
        var tgi = tg.index();
        rightTxt.hide();
        rightTxt.eq(tgi).show();
    })


    // top_search
    var searchBtn = $('.top_search_btn');
    var searchOn = $('.top_search_on');
    var btnClose = $('.btn_close');

    searchOn.hide();
    searchBtn.click(function() {
        searchOn.show();
    });

    btnClose.click(function() {
        searchOn.hide();
    })



})