$(document).ready(function () {
    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 160) {
            $('#menue').addClass('menue-fixed');
        }

        if ($(window).scrollTop() < 161) {
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

function checkIE()
 {
     if (navigator.appCodeName == "IE")
     window.location = "ie.html";
 }