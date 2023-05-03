// header Search
$(".mobile_search").click(function() {
    $(".header__search").addClass("active");
    $(".header__left").addClass("none");
    setTimeout(function() {
        $(".header__search").addClass("opacity");
    },100);
});
function noneSearch(className) {
    $(className).click(function() {
        $(".header__search").removeClass("opacity");
        setTimeout(function() {
            $(".header__left").removeClass("none");
            $(".header__search").removeClass("active");
        },200);
    });
};
noneSearch(".main");
noneSearch(".footer");
noneSearch(".header__burgir");

// header Burgir
$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__wrap").removeClass("bg");
        $(".header__navbar").removeClass("active");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__wrap").addClass("bg");
        $(".header__navbar").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    };
});

// modal
$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    },1);
});
$(".modal__close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
    },500);
});