
$(document).ready(function () {
    var xStart, yStart = 0;
    var xStart, yStart = 0;
    //preventeng touch inside tables

    document.querySelector(".HorizontalScrollContainer").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".HorizontalScrollContainer").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".firsttable").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".firsttable").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".Backups").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".Backups").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".updates").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".updates").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".sandbox").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".sandbox").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".bandwidth").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".bandwidth").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".support").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".support").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".development").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".development").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".portal").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".portal").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });
    document.querySelector(".plansfooter").addEventListener('touchstart',function(e) {
        xStart = e.touches[0].screenX;
        yStart = e.touches[0].screenY;
    }, { passive: false });
    document.querySelector(".plansfooter").addEventListener('touchmove',function(e) {
        var xMovement = Math.abs(e.touches[0].screenX - xStart);
        var yMovement = Math.abs(e.touches[0].screenY - yStart);
        if((xMovement * 3) > yMovement && e.cancelable) {
            e.preventDefault();
        }
    }, { passive: false });

    function BindHorizontalScroll1(ParentId, Steps, IsResponsive) {
        var StepWidth = 200;
        //add shades to right table cells
        $(ParentId + " .HorizontalScrollContainer").addClass('HorizontalScrollContainer__right');
        $(ParentId + " .ScrollBack").click(function () {
            StepWidth = $(ParentId + ".HorizontalScrollContainer > div > div , " + ParentId + " .HorizontalScrollContainer > div > div").find(" .Item").width();
            $(ParentId + " .HorizontalScrollContainer > div").animate({ scrollLeft: '-=' + (StepWidth * Steps) }, 200);
            $(ParentId + " .HorizontalScrollContainer").addClass('HorizontalScrollContainer__right');
        });
        $(ParentId + " .ScrollNext").click(function () {
            StepWidth = $(ParentId + ".HorizontalScrollContainer > div > div , " + ParentId + " .HorizontalScrollContainer > div > div").find(" .Item").width();
            $(ParentId + " .HorizontalScrollContainer > div").animate({ scrollLeft: '+=' + (StepWidth * Steps) }, 200);
            $(ParentId + " .HorizontalScrollContainer").addClass('HorizontalScrollContainer__left');
        });

        $(ParentId + ".HorizontalScrollContainer > div > div , " + ParentId + " .HorizontalScrollContainer > div > div").width(function () {
            var TheWidth = 0;
            $(this).find(" .Item").each(function () {
                TheWidth += $(this).outerWidth();
            });
            return TheWidth + "px";
        });

        if (IsResponsive) {
            var timeout;
            $(window).resize(function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    $(ParentId + ".HorizontalScrollContainer > div > div , " + ParentId + " .HorizontalScrollContainer > div > div").width(function () {
                        var TheWidth = 0;
                        $(this).find(" .Item").each(function () {
                            TheWidth += $(this).outerWidth();
                        });
                        return TheWidth + "px";
                    });
                }, 200);
            });
        }

        $(function () {
            var scrollLeftPrev = 0;
            $(ParentId + " .HorizontalScrollContainer > div").scroll(function () {
                var $elem=$(ParentId + " .HorizontalScrollContainer > div");
                var newScrollLeft = $elem.scrollLeft(),
                    width=$elem.width(),
                    scrollWidth=$elem.get(0).scrollWidth;
                var offset=0;
                if (scrollWidth- newScrollLeft-width==offset) {
                    $(ParentId + " .HorizontalScrollContainer").removeClass('HorizontalScrollContainer__right');
                }
                if (newScrollLeft === 0) {
                    $(ParentId + " .HorizontalScrollContainer").removeClass('HorizontalScrollContainer__left');
                }
                // console.log($(ParentId + " .HorizontalScrollContainer > div").width());
                
                scrollLeftPrev = newScrollLeft;
                // if ( $('#scrollquestion').scrollLeft() == ($('#scrollquestion').width() - $('#scrollquestion').width())) {
                //     alert('end2!');
                // }
                //         if ( $('#scrollquestion').scrollLeft() == ($('#scrollquestion').width() + $('#scrollquestion').width()+200)) {
                //     alert('end!');
                // }
            });
        });
    }

    BindHorizontalScroll1("#placeholdersection100" , 1, true);

});
