$(document).foundation()

//sliding image js
//getting the element's id and saving it
var blue = document.getElementById("slider");
//an array of images
var orange = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg", "img/slider5.jpg", "img/slider6.jpg"];
//counter
var counter = 0;
//function to image slider
function slidy() {
    blue.src = orange[counter];
    counter++;
    //counter reset
    if (counter >= orange.length) {
        counter = 0;
    }
}
setInterval(slidy, 3000);
