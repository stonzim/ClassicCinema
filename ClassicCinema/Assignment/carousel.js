/* global $ */
var Carousel = (function(){
    "use strict"
    var pub = {};
    var pictureList = [];
    var pictureIndex = 0;

    /* Took this feature from the example lab 11 that was released */
    function nextPicture() {
        $("#slide").fadeOut(
            function() {
                $("#slide").attr("src", pictureList[pictureIndex]).fadeIn();
            });
        pictureIndex += 1;
        if (pictureIndex >= pictureList.length) {
            pictureIndex = 0;
        }
    }

    /* Fading pictures for the carousel on index page */
    pub.setup = function() {
        pictureList.push("images/Dunedin_Regent_Theatre.jpg");
        pictureList.push("images/NZ_dunedin_SI.jpg");
        pictureList.push("images/University_of_Otago.jpg");
        nextPicture();
        setInterval(nextPicture, 2000);
    };
    return pub;
}());
$(document).ready(Carousel.setup);