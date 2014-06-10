$(document).on("ready", function(){
    $(window).scroll(function () {
        var slideVal = $(window).scrollTop();
        if (slideVal > 0) {
            $("header").addClass("notTop");
        }
        else {
             $("header").removeClass("notTop");
        }
    });
});
