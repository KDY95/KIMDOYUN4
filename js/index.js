$(document).ready(function () {

    var windowWidth = $(window).width()
    var mouseX = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".box1").css("background-color", "red");
        }
        if (mouseX > windowWidth / 2) {
            $(".box1").css("background-color", "blue");
        }
    })

    var windowWidth = $(window).width()
    var mouseX = 0;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".box2").css("background-color", "blue");
        }
        if (mouseX > windowWidth / 2) {
            $(".box2").css("background-color", "red");
        }
    })



})