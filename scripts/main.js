$(document).on("ready", function(){
    $(window).scroll(function () {
        var slideVal = $(window).scrollTop();
        if (slideVal > 0) {
            $("header").removeClass("top");
        }
        else {
             $("header").addClass("top");
        }
    });
});
