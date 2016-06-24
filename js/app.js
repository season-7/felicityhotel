$(document).foundation()

//sliding image js
var blue = document.getElementById("slider");
var orange = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg", "img/slider5.jpg", "img/slider6.jpg"];
var counter = 0;

function slidy() {
    blue.src = orange[counter];
    counter++;

    if (counter >= orange.length) {
        counter = 0;
    }
}
setInterval(slidy, 3000);
