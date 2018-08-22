var Carousel = (function(){
    "use strict"
    var pub = {};
    var pictureList = [];
    var pictureIndex = 0;
    function nextPicture() {
        var element = document.getElementById("slide");
        element.src = pictureList[pictureIndex];
        pictureIndex += 1;
        if (pictureIndex >= pictureList.length) {
            pictureIndex = 0;
        }
    }
    pub.setup = function() {
        // pictureList.push("images/800px-St_Pauls_Anglican_Cathedral_Dunedin.jpg");
        // pictureList.push("images/Castle_Larnach_Exterior_2.jpg");
        pictureList.push("images/Dunedin_Regent_Theatre.jpg");
        pictureList.push("images/Dunedin_Town_House.jpg");
        pictureList.push("images/NZ_dunedin_SI.jpg");
        pictureList.push("images/University_of_Otago.jpg");
        nextPicture();
        setInterval(nextPicture, 2000);
    };
    return pub;
}());
if (document.getElementById) {
    window.onload = Carousel.setup;
}