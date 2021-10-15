jQuery(document).ready(function($){
    $('.header__block-media--burger').on('click', function () {
        $('.header__navbar').toggleClass('menu--active');

    });

    // $('.menu__btn').on('click', function () {
    //     $('.menu').removeClass('menu--active');
    // });
    // $('.menu__item').on('click', function () {
    //     $('.menu').removeClass('menu--active');
    // });

        $('.review__slider').bxSlider({
            minSlides:1,
            maxSlides:5,
            moveSlides:5,
            slideWidth:326,
            slideMargin:50,
            pager:false

        });

});
