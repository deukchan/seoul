$(function(){


    /**
     * @언어박스선택
     * 
     * 
     * @window.open
     */

    $('#langBtn').click(function(){
        url = $('#langList').val()
        window.open(url);
    })

    /**
     * @주요뉴스슬라이드
     * 
     * 
     * 
     */
    const mainSlide = new Swiper(".main-slide", {
      autoplay: {
        delay: 1000,
        disableOnInteraction: false, //
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
    
    $('.sc-slide .btn-nav').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).hasClass('main')){
            mainSlide.slideToLoop(0);
        }else{
            mainSlide.slideToLoop(3);
        }
    })

    mainSlide.on('slideChange',function(){

        if(this.realIndex >= 3){
            $('.sc-slide .group-nav .citizen').addClass('active').siblings().removeClass('active')
        }else{
            $('.sc-slide .group-nav .main').addClass('active').siblings().removeClass('active')
        }
    })





    $('.sc-slide .autoplay').click(function(){
        if($(this).hasClass('on')){
            mainSlide.autoplay.start();
            $(this).attr('aria-label','일시정지').removeClass('on');
        }else{
            mainSlide.autoplay.pause();
            $(this).attr('aria-label','재생').addClass('on');
        }
    })







    /**
     * @배너슬라이드
     */
    var banner = new Swiper(".banner-slide", {
      spaceBetween: 40,
      slidesPerView: 3,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".slide-pagination",
        clickable: true,
        type: "fraction",
      },
      navigation: {
      nextEl: ".next",
      prevEl: ".prev",
      },
    });


    $('.sc-banner .autoplay').click(function(){
        if($(this).hasClass('on')){
            banner.autoplay.start();
            $(this).attr('aria-label','일시정지').removeClass('on');
        }else{
            banner.autoplay.pause();
            $(this).attr('aria-label','재생').addClass('on');
        }
    })

    /**
     * @관련사이트
     * 
     * 
     * 
     */

    $('.btn-related').click(function(){

        if($(this).hasClass('none')){
            window.open($(this).data('url'));
            return false;
        }
        
        if($(this).hasClass('on')){
            $('.sub-area').slideUp();
            $('.btn-related').removeClass('on');
        }else{
            $('.sub-area').slideUp()
            $('.btn-related').removeClass('on');
            $(this).addClass('on').siblings('.sub-area').slideDown()
        }
    })


    $('.sc-related .sub-list li:first-child a').keydown(function(e){
        keyCode = e.keyCode;
        if(keyCode === 9 && e.shiftKey){
            $('.sub-area').slideUp();
            $('.btn-related').removeClass('on');
        }
    })
    $('.sc-related .sub-list li:last-child a').keydown(function(e){
        keyCode = e.keyCode;
        if(keyCode === 9 && !e.shiftKey){
            $('.sub-area').slideUp();
            $('.btn-related').removeClass('on');
        }
    })



    

    /**
     * @상단버튼
     * 
     * 
     * 
     */

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr >= 100){
            $('#topBtn').addClass('show')
        }else{
            $('#topBtn').removeClass('show')
        }

    })


    $('#topBtn').click(function(e){
        $('html,body').animate({scrollTop:0},300)
    })


})