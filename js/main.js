// add event --------------------------------------------------------------------------------------------------------------------


$(function () {
    $('a[href^="#"]').click(function () {
        var offsetY = -80;
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + offsetY;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

// header 固定
$(window).bind("scroll", function () {
    var value = $(this).scrollTop();

    if (value > 80) {
        $('.l-header').addClass('l-fixed is-show');
    } else {
        $('.l-header').removeClass('l-fixed is-show');
    }
});

// フェードイン

$(function () {
    $(window).on("load scroll", function () {
        $(".scroll-fadein").each(function () {
            var i = $(this),
                n = $(window),
                o = i.offset().top,
                t = n.scrollTop(),
                l = n.height();
            t > o - l + l / 1500 ? i.addClass("is-display") : i.removeClass("is-display")
        })
    })
});



// スクロール200pxでヘッダメニュー固定表示
// 最下部スクロールでヘッダメニュー非表示

$(window).bind("scroll", function () {

    value = $(this).scrollTop();
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();

    if (value > 200) {
        $('#top-head').addClass('fixed-nav is-show');
    } else {
        $('#top-head').removeClass('fixed-nav is-show');
    }

    if ((scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
        $('#top-head.fixed-nav').addClass('hide');
    } else {
        $('#top-head.fixed-nav').removeClass('hide');
    }
});


// FAQアコーディオンテンプレート
$(document).ready(function () {
    // 初期状態でアコーディオンを閉じる
    $(".js-toggle-head").next(".js-toggle-body").hide();

    $(window).on("load resize", function () {
        $(".js-toggle-head").off("click");

        $(".js-toggle-head").click(function () {
            $(this).toggleClass("is-open");
            $(this).next(".js-toggle-body").slideToggle();
        });

        // 閉じるボタンをクリックしたときの処理
        $(".c-btn-close").click(function () {
            $(this).parent().slideUp();
            $(this).parent().prev(".js-toggle-head").removeClass("is-open");
        });
    });
});



// Slick slider

$(function () {

    $(".p-mv-slider").slick({
        fade: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false
    });

    $(".p-slider-review").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 15000,
        cssEase: 'linear',
        arrows: false,
        swipe: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerMode: true,
        initialSlide: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false,
                    autoplaySpeed: 1000,
                    speed: 1000,
                    swipe: true,
                },
            },
        ],
    });
});