$(window).on("scroll", function () {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    // Link Highlighting
    if (pos2 > $("#home").offset().top) {
        highlightLink("home");
    }
    if (pos2 > ($("#about").offset().top + $("#home").offset().top) / 2) {
        $(".title-dash").addClass("left-dash-animation");
    }
    if (pos2 > $("#about").offset().top) {
        highlightLink("about");
    }
    // if (pos2 > $("#portfolio").offset().top) {
    //     highlightLink("portfolio");
    // }
    if (pos2 > $("#portfolio").offset().top) {
        highlightLink("portfolio");
    }
    if (
        pos2 > $("#contact").offset().top ||
        pos + $(window).height() === $(document).height()
    ) {
        highlightLink("contact");
    }
    // Prevent Hover on Scroll
    // clearTimeout(lockTimer);
    // if (!$("body").hasClass("disable-hover")) {
    //     $("body").addClass("disable-hover");
    // }

    // lockTimer = setTimeout(function () {
    //     $("body").removeClass("disable-hover");
    // }, 500);
});

function highlightLink(anchor) {
    $("nav .active").removeClass("active");
    $("nav")
        .find('[href="#' + anchor + '"]')
        .addClass("active");
}

$("#scroll-button").on("click", function () {
    location.href = "#about";
});

$(".filter").on("click", function () {
    $(".gallery-card.active").removeClass("active");

    $(`.gallery-card[framework=${this.attributes.filter.value}]`).addClass(
        "active"
    );
    $(".dash-line").css("left", this.offsetLeft + "px");
    $(".dash-line").css("width", this.offsetWidth + "px");
    if (this.attributes.filter.value === "all") {
        $(".gallery-card[framework]").addClass("active");
    }
});
