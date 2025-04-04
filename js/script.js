// header scroll animation
$(document).ready(function () {
    var lastScrollTop = 0;
    var header = $("header");
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop) {
            header.slideUp(300);
        } else {
            header.slideDown(300);
        }
        lastScrollTop = currentScroll;
    });
});
// end

// Button for showing more skills
$(document).ready(function () {
    $("#skill-more").click(function () {
        let hiddenBoxes = $(".skills .box.hidden");
        let count = 0;
        hiddenBoxes.each(function () {
            if (count < 4) {
                $(this).hide().removeClass("hidden").slideDown(500);
                count++;
            }
        });
        if ($(".skills .box.hidden").length === 0) {
            $(this).fadeOut(300);
        }
    });
});

// end


// Button for showing more projects
$(document).ready(function () {
    $("#project-more").click(function () {
        let hiddenBoxes = $(".projects .col.hidden");
        let count = 0;
        hiddenBoxes.each(function () {
            if (count < 3) {
                $(this).hide().removeClass("hidden").slideDown(500);
                count++;
            }
        });

        if ($(".projects .col.hidden").length === 0) {
            $(this).fadeOut(300);
        }
    });
});

// end

// contact form clear input box
$(document).ready(function () {
    $(".formcancelbtn").click(function () {
        $(".formcancel").val("");
    });
});


