/* global $ */
var Carousel = (function(){
    "use strict"
    var pub = {};
    var pictureList = [];
    var pictureIndex = 0;
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
    pub.setup = function() {
        pictureList.push("images/Dunedin_Regent_Theatre.jpg");
        pictureList.push("images/Dunedin_Town_House.jpg");
        pictureList.push("images/NZ_dunedin_SI.jpg");
        pictureList.push("images/University_of_Otago.jpg");
        nextPicture();
        setInterval(nextPicture, 2000);
    };
    return pub;
}());
$(document).ready(Carousel.setup);