/* global $ */
var ShowHide = (function () {
    "use strict";

    var pub = {};

    // function showHideDetails() {
    //
    //     var paragraphs, picture, p;
    //     var theFilm = this.parentNode;
    //
    //
    //     paragraphs = theFilm.getElementsByTagName("p");
    //     picture = theFilm.getElementsByTagName("img")[0];
    //
    //     for (p = 0; p < paragraphs.length; p += 1) {
    //         if (paragraphs[p].style.display === "none") {
    //             paragraphs[p].style.display = "block";
    //         } else {
    //             paragraphs[p].style.display = "none";
    //         }
    //     }
    //
    //     if (picture.style.display === "none") {
    //         picture.style.display = "block";
    //     } else {
    //         picture.style.display = "none";
    //     }
    // }

    function showHideDetails() {
        $(this).siblings().toggle();
    }

    pub.setup = function() {
        var films, f, title;
        films = document.getElementsByClassName("film");
        for (f = 0; f < films.length; f+=1) {
            title = films[f].getElementsByTagName("h3")[0];
            title.style.cursor = "pointer";
            title.onclick = showHideDetails;
        }
    };
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', ShowHide.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', ShowHide.setup);
} else {
    alert("Could not attach 'showHideDetails.setup' to the 'window.onload' event");
}