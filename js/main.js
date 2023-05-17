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
$(".aside__title").click(function() {
    $(this).toggleClass("close");
});
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};

$(".header__language .btn").click(function() {
    $(this).toggleClass("open");
});