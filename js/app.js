$(document).foundation()

//Image slider javascript

function slidingImage() {
    //Saving the element's i
    var orange = document.getElementById("slider");
    var blue = [];
    //counter i
    var i = 0;

    //looping the varibale through the array
    orange.src = blue[i];
    i++ //add the counter after every loop

    //Function to reset the counter when it gets to the end of the array
    if (i >= blue.length) {
        i = 0;
    }
}
