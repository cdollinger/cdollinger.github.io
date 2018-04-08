if (navigator.userAgent.indexOf('MSIE') !== -1
|| navigator.appVersion.indexOf('Trident/') > 0) {
window.location = "sadIE11IsSad.html";
}
$(document).ready(function () {
$(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 280) {
        $('#menue').addClass('menue-fixed');
    }
    if ($(window).scrollTop() < 281) {
        $('#menue').removeClass('menue-fixed');
    }

});
});

function myFunction() {
var x = document.getElementById("menue");
if (x.id === "menue") {
    x.id += " responsive";
} else {
    x.id = "menue";
}
}