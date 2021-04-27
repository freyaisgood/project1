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
    })
})