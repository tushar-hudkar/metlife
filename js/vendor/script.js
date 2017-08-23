$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 170
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    $(".pro-info").click(function() {
        $(".pro-settings").fadeToggle("fast", "linear");
    });
});

$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".hint").click(function() {
            $(".pop").fadeToggle("fast", "linear");
        });
    } else {
        $(".hint").hover(function() {
            $(".pop").fadeToggle("fast", "linear");
        });
    }
});


$(window).load(function() {
    $("#resetButton").click(function() {
        $(".conform").fadeIn();
    });
});

$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".change-password").click(function() {
            $(".overlay").fadeIn("fast", "linear");
            $(".overlay").css("position", "relative", "overflow-y", "auto");
            $(".dashboard-body, .resultCards, .scroboard").css("display", "none");
            $(".pro-settings").fadeOut("fast", "linear");
        });
    } else {
        $(".change-password").click(function() {
            $(".overlay").fadeIn("fast", "linear");
            $(".pro-settings").fadeOut("fast", "linear");
        });
    }
});

$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.overlay').height($(window).height());
    } else {
        //
    }
});

$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".cross").click(function() {
            $(".overlay").fadeOut("fast", "linear");
            $(".dashboard-body, .resultCards, .scroboard").css("display", "block");
        });
    } else {
        $(".cross").click(function() {
            $(".overlay").fadeOut("fast", "linear");
        });
    }
});
