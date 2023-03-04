console.log("maaaain");
$("#scrooldown_button").click(function() {
    var top1 =$("#row-cards").offset().top -68
    $('html, body').animate({
        scrollTop: top1
    }, 2000);
});
$(document).ready(function() {
    var counters1 =document.getElementById("counters1");
    var clef_row =document.getElementById("clef_row");
    var clef_row2 =document.getElementById("clef_row2");
    var imagebg11 =document.getElementById("imagebg11");
    var clef_row3 = document.getElementById("clef_row3");
    var clef_hr_inner = document.getElementById("clef_hr_inner");

    $(window).on('scroll', function () {
        if(isInViewport(counters1)){
            $('.temp0').hide();
            $('.counterincreaser').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            $('.counterincreaser').each(function () {
                $("span").removeClass("counterincreaser");
            });
        };
        if(isInViewport(clef_row)){
            $(".us_animate_afl").each(function () {
                $(this).addClass("start");
            });
        };
        if(isInViewport(clef_row2)){
            $(".us_animate_afl2").each(function () {
                $(this).addClass("start2");
            });
            
        };
        if(isInViewport(imagebg11)){
            $(".us_animate_afl1").each(function () {
                $(this).addClass("start1");
            });
            
        };
        if(isInViewport(clef_row3)){
            $(".us_animate_afl3").each(function () {
                $(this).addClass("start3");
            });
            
            $(".clef_hr_inner3").each(function () {
                $(this).addClass("start33");
            });
            
        };
    });
});  
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}





$(document).ready(function() {

    $('#carousel-example1').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('#carousel-example1 .carousel-item').length;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('#carousel-example1 .carousel-item').eq(i).appendTo('#carousel-example1 .carousel-inner');
                }
                else {
                    $('#carousel-example1 .carousel-item').eq(0).appendTo('#carousel-example1 .carousel-inner');
                }
            }
        }
    });
    $('#carousel-example2').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('#carousel-example2 .carousel-item').length;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('#carousel-example2 .carousel-item').eq(i).appendTo('#carousel-example2 .carousel-inner');
                }
                else {
                    $('#carousel-example2 .carousel-item').eq(0).appendTo('#carousel-example2 .carousel-inner');
                }
            }
        }
    });
    
});