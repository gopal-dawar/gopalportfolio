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



// project show modal 
$(".modal1").slideUp();
$(document).ready(function () {
    $(".showdata").click(function (e) {
        e.preventDefault();

        let projectBox = $(this).closest(".box");

        // Extract data
        let title = projectBox.find(".heading h1").text();
        let price = projectBox.find(".price").html();
        let imgSrc = projectBox.find(".imgs img").attr("src");
        let category = projectBox.find(".category").data("category") || "No Category";
        let liveDemo = projectBox.find(".btn1").data("live");
        let buyNow = projectBox.find(".btn2").data("buy");

        // Update modal content
        $("#modal-title").text(title);
        $("#modal-price").html(price);
        $("#modal-img").attr("src", imgSrc);
        $("#modal-category").text(category);
        $("#modal-desc").text("This is a detailed description of " + title);
        $("#modal-live").attr("href", liveDemo);
        $("#modal-buy").attr("href", buyNow);

        // Show modal
        $(".modal1").css({
            "display": "flex",
            "justify-content": "center",
            "align-items": "center"
        });

        $(".modal1").fadeIn();

    });

    // Close modal on close button
    $(".m-close").click(function () {
        $(".modal1").fadeOut();
    });

    // Close modal when clicking outside the modal
    $(document).mouseup(function (e) {
        let modalContainer = $(".modal1 .container");
        if (!modalContainer.is(e.target) && modalContainer.has(e.target).length === 0) {
            $(".modal1").fadeOut();
        }
    });
});
// end

