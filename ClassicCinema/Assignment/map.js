/* global $, alert */


var Map = (function() {
    "use strict";
    var pub = {};

    var map, hotel, rest1, rest2, rest3, cast, city, walk;

    function centreMap() {
        var markerLocation, markerBounds;
        if (this.textContent === 'The Harbour Hotel') {
            markerLocation = [hotel.getLatLng()];
        } else if  (this.textContent === 'Sue\'s Sushi'){
            markerLocation = [rest1.getLatLng()];
        } else if  (this.textContent === 'Bob\'s Burgers'){
            markerLocation = [rest2.getLatLng()];
        } else if  (this.textContent === 'Tom\'s Takeaway'){
            markerLocation = [rest3.getLatLng()];
        } else if  (this.textContent === 'Lanarch Castle'){
            markerLocation = [cast.getLatLng()];
        } else if  (this.textContent === 'Dunedin City'){
            markerLocation = [city.getLatLng()];
        } else {
            markerLocation = [walk.getLatLng()];
        }
        markerBounds = L.latLngBounds(markerLocation);
        map.fitBounds(markerBounds);
    }

    function visibility() {
        var opacity = this.options.opacity;     /* check opacity */
        if (opacity === 1) {
            this.setOpacity(0);                 /* then reverse it */
        } else {
            this.setOpacity(1);
        }
    }

    pub.setup = function() {
        $("h3").click(centreMap).css("cursor", "pointer");

        map = L.map('map').setView([-45.855467, 170.601239], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'Map data &copy; ' + '<a href="http://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a> CC-BY-SA'}).addTo(map);




        hotel = L.marker([-45.856618, 170.598675]).addTo(map);
        hotel.bindPopup("<b class=\'popTitle\'>The Harbour Hotel</b>" +
            "<img class=\'popPic\' src=\"images/hotel.jpg\" width = '150' height='100' alt=\"Harbour Hotel\">" +
            "<p class=\'popMain\'>Our lovely Hotel</p>");
        rest1 = L.marker([-45.853703, 170.600681]).addTo(map);
        rest1.bindPopup("<b class='popTitle'>Sue's Sushi</b>" +
             "<img class='popPic' src=\"images/rest1.JPG\" width = '150' height='100' alt=\"Rest 1\">" +
            "<p class='popMain'>Great tasting sushi</p>");
        rest2 = L.marker([-45.859412, 170.600381]).addTo(map);
        rest2.bindPopup("<b class='popTitle'>Bob's Burgers</b>" +
             "<img class='popPic' src=\"images/rest2.jpg\" width = '150' height='100' alt=\"Rest 2\">" +
            "<p class='popMain'>The best burgers in NZ</p>");
        rest3 = L.marker([-45.855108, 170.603299]).addTo(map);
        rest3.bindPopup("<b class='popTitle'>Tom's Takeaway</b>" +
            "<img class='popPic' src=\"images/rest3.jpg\" width = '150' height='100' alt=\"Rest 3\">" +
            "<p class='popMain'>Tasty takeaway</p>");
        cast = L.marker([-45.861684, 170.627203]).addTo(map);
        cast.bindPopup("<b class='popTitle'>Larnach Castle</b>" +
            "<img class='popPic' src=\"images/cast.jpg\" width = '150' height='100' alt=\"Larnach Castle\">" +
            "<p class='popMain'>NZ's only castle</p>");
        city = L.marker([-45.875698, 170.505924]).addTo(map);
        city.bindPopup("<b class='popTitle'>Dunedin City</b>" +
            "<img class='popPic' src=\"images/city.jpg\" width = '150' height='100' alt=\"The Octagon\">" +
            "<p class='popMain'>Come and see our city</p>");
        walk = L.marker([-45.848652, 170.657501]).addTo(map);
        walk.bindPopup("<b class='popTitle'>Forrest Walk</b>" +
            "<img class='popPic' src=\"images/walk.jpg\" width = '150' height='100' alt=\"Forest\">" +
            "<p class='popMain'>Enjoy our scenery</p>");

        var list = [hotel, rest1, rest2, rest3, cast, city, walk];
        $(list).click(visibility);
    };
    return pub;
}());

$(document).ready(Map.setup);