$("html").removeClass("no-js");

$(document).ready(function () {
    $(".c-responsive-toggle").on("click", function () {
        $(".c-header__links").slideToggle();
        //hiding menu into hamburger
        // $(".c-section--main-nav").appendTo(".c-header__links").slideToggle(1000);
    });
    if ($('.c-back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.c-back-to-top').addClass('show');
                } else {
                    $('.c-back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.c-back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    $(".c-nav-toggle__link").on("click",function () {
        $("#menu").slideToggle(500);
        console.log($(".c-nav-toggle__link").children(".fa-caret-down").length);
        if ($(".c-nav-toggle__link").children(".fa-caret-up").length) {
            $(".c-nav-toggle__link").html("<i class=\"fa fa-caret-down\"></i>&nbsp;&nbsp;Zobrazit&nbsp;rozcestník&nbsp;&nbsp;<i class=\"fa fa-caret-down\"></i>");
        }
        else {
            $(".c-nav-toggle__link").html("<i class=\"fa fa-caret-up\"></i>&nbsp;&nbsp;Skrýt&nbsp;rozcestník&nbsp;&nbsp;<i class=\"fa fa-caret-up\"></i>");
        }
    });

});