window.onload = function(){
    // 메뉴기능
    // 주메뉴
    let gnb_li = $('.gnb > li');
    
    // 서브메뉴 div
    let submenu_div = $('.submenu-div');

    // 서브메뉴들
    let submenu_box = $('.submenu-box');
    // 서브메뉴 높이값
    let submenu_height = [];

    // 서브메뉴 높이 값 파악
    $.each(submenu_box, function(index, item){
        let temp = $(this).outerHeight();
        temp = Math.ceil(temp);
        submenu_height.push(temp);
        // submenu_height[index] = temp;
    }); 
    // console.log(submenu_height);
    $.each(gnb_li, function(index, item){
        $(this).mouseenter(function(){
            // 높이 값을 파악한다
            let h = submenu_height[index];
            submenu_div.css('height', h);
            submenu_div.css('border-bottom-width', 2);
            // 서브메뉴 보이고 숨기기
            submenu_box.hide();
            submenu_box.eq(index).show();
            // 포커스 유지
            gnb_li.removeClass('gnb-li-active');
            gnb_li.eq(index).addClass('gnb-li-active');
        });
    });

    // 서브메뉴 숨기기
    let nav = $('.nav');
    // 서브메뉴 타이머
    let menu_timer;
    let menu_timer_delay = 100;

    nav.mouseenter(function(){
        clearTimeout(menu_timer);
    });

    nav.mouseleave(function(){
        clearTimeout(menu_timer);
        menu_timer = setTimeout(menuUp, menu_timer_delay);
        // submenu_div.css('height', 0);
    });

    function menuUp(){
        clearTimeout(menu_timer);
        submenu_div.css('height', 0);
        submenu_div.css('border-bottom-width', 0);

        // 포커스 해제
        gnb_li.removeClass('gnb-li-active');
    }

    // 서브메뉴 묶음
    let submenu_container = $('.submenu-div .container');
    submenu_container.mouseenter(function(){
        // 서브메뉴 유지
        clearTimeout(menu_timer);
    });

    submenu_container.mouseleave(function(){
        clearTimeout(menu_timer);
        menu_timer = setTimeout(menuUp, menu_timer_delay);
    });

    // 탭 공지사항
    let news_menu = $('.news-menu a');
    let news_list = $('.news-list');
    $.each(news_menu, function(index,item){
        $(this).click(function(event){
            event.preventDefault();
            news_menu.removeClass('news-menu-active');
            news_menu.eq(index).addClass('news-menu-active');

            news_list.removeClass('news-list-active');
            news_list.eq(index).addClass('news-list-active');
        });
    });

    

    // 공지사항 슬라이더
    new Swiper('.sw-vs-notice', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        direction: "vertical",
        navigation: {
            nextEl: '.sw-vs-notice-next',
            prevEl: '',
        }
    });

    // 보도자료 슬라이드
    new Swiper('.sw-vs-news', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        direction: "vertical",
        navigation: {
            nextEl: '.sw-vs-news-next',
            prevEl: '',
        }
    });
    

    // news 슬라이드
    let sw_news = new Swiper('.sw-news', {
        // loop: true,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
        pagination: {
            el: '.sw-news-pg',
            clickable: true,
        },
    });

    $('.sw-news-bt').click(function () {

        // 현재 sw-news-bt-active 가 없으면
        // 자동 실행 중이다.

        // sw-news-bt-active 가 있으면
        // 멈춘 상태이다.

        let state = $(this).hasClass('sw-news-bt-active');

        if (state == true) {
            // 현재 멈추고 있으니 플레이 상태로 바꾼다.
            sw_news.autoplay.start();
        } else {
            // 현재 플레이 중이니 멈춤 상태로 바꾼다.
            sw_news.autoplay.stop();
        }


        $(this).toggleClass('sw-news-bt-active');
    });
    // 배너 슬라이드
    new Swiper('.sw-banner', {
        loop: true,
        slidesPerView: 7,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            nextEl: '.sw-banner-next',
            prevEl: '.sw-banner-prev'
        }
    });

    // 모달창
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    modal_close.click(function(){
        modal.fadeOut(500);
    })
};