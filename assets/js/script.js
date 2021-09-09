$(function(){

    $(window).on ('scroll', function(){
        
        // SIDEBAR STICKY ON SCROLL DOWN
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > 3417 && scrollTop < 4020) {
            $('.sidebar').addClass('sticky_sidebar');
        } else {
            $('.sidebar').removeClass('sticky_sidebar');
        }

        console.log(scrollTop);

        if (scrollTop > 4020){
             $('.sidebar').addClass('sticky_sidebar_fix');
        } else {
            $('.sidebar').removeClass('sticky_sidebar_fix');
        }

        if (window.innerWidth <= 1199) {

            if (scrollTop > 3300 && scrollTop < 3630) {
                $('.sidebar').addClass('sticky_sidebar');
            } else {
                $('.sidebar').removeClass('sticky_sidebar');
            }

            if (scrollTop > 3630){
                $('.sidebar').addClass('sticky_sidebar_fix');
           } else {
               $('.sidebar').removeClass('sticky_sidebar_fix');
           }
        }

        if (window.innerWidth >= 1200 && window.innerWidth <=1399) {

            if (scrollTop > 3310 && scrollTop < 3915) {
                $('.sidebar').addClass('sticky_sidebar');
            } else {
                $('.sidebar').removeClass('sticky_sidebar');
            }

            if (scrollTop > 3915){
                $('.sidebar').addClass('sticky_sidebar_fix');
           } else {
               $('.sidebar').removeClass('sticky_sidebar_fix');
           }
        }

        if (window.innerWidth >= 1400) {

            if (scrollTop > 3332 && scrollTop < 3915) {
                $('.sidebar').addClass('sticky_sidebar');
            } else {
                $('.sidebar').removeClass('sticky_sidebar');
            }

            if (scrollTop > 3915){
                $('.sidebar').addClass('sticky_sidebar_fix');
           } else {
               $('.sidebar').removeClass('sticky_sidebar_fix');
           }
        }

    })



    // Header Search Button
    $('.header_search').on('click', function(){
        $('.header_search--overlay').fadeIn(200);
    })

    $('.header_search').on('click', function(){
        $('.search-close').fadeIn(1000);
    })

    // Header Search Close

    $('.search-close').on('click', function(){
        $('.header_search--overlay').fadeOut(500);
        return false;
    })

    // Animate Header Search Overlay Form

    $('.header_search').on('click', function(){
        $('.header_search--overlay form').css('animation', 'centerOut .5s forwards .5s')
    })

    $('.search-close').on('click', function(){
        $('.header_search--overlay form').css('animation', 'toCenter .5s forwards')
    })

    // Sidebar slider

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

      });
      
})