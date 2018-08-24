/* global $, alert */


var Map = (function() {
    "use strict";
    var pub = {};

    var map, hotel, rest1, rest2, rest3, cast, city, walk;

    function centreMap() {
        var markerLocation, markerBounds;
        if (this.textContent === 'Hotel') {
            markerLocation = [hotel.getLatLng()];
        } else if  (this.textContent === 'Rest1'){
            markerLocation = [rest1.getLatLng()];
        } else if  (this.textContent === 'Rest2'){
            markerLocation = [rest2.getLatLng()];
        } else if  (this.textContent === 'Rest3'){
            markerLocation = [rest3.getLatLng()];
        } else if  (this.textContent === 'Lanarch Castle'){
            markerLocation = [cast.getLatLng()];
        } else if  (this.textContent === 'City'){
            markerLocation = [city.getLatLng()];
        } else {
            markerLocation = [walk.getLatLng()];
        }
        markerBounds = L.latLngBounds(markerLocation);
        map.fitBounds(markerBounds);
    }

    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    function visibility() {
        var opacity = this.options.opacity;
        if (opacity === 1) {
            this.setOpacity(0);
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
            "<p class=\'popMain\'>Specialising in Classic Cinema</p>");
        rest1 = L.marker([-45.853703, 170.600681]).addTo(map);
        rest1.bindPopup("<b class='popTitle'>Rest 1</b>" +
             "<img class='popPic' src=\"images/rest1.JPG\" width = '150' height='100' alt=\"Rest 1\">" +
            "<p class='popMain'>Specialising in Sci-Fi Cinema</p>");
        rest2 = L.marker([-45.859412, 170.600381]).addTo(map);
        rest2.bindPopup("<b class='popTitle'>Rest 2</b>" +
             "<img class='popPic' src=\"images/rest2.jpg\" width = '150' height='100' alt=\"Rest 2\">" +
            "<p class='popMain'>Specialising in Hitchcock Cinema</p>");
        rest3 = L.marker([-45.855108, 170.603299]).addTo(map);
        rest3.bindPopup("<b class='popTitle'>Rest 3</b>" +
            "<img class='popPic' src=\"images/rest3.jpg\" width = '150' height='100' alt=\"Rest 3\">" +
            "<p class='popMain'>Specialising in Hitchcock Cinema</p>");
        cast = L.marker([-45.861684, 170.627203]).addTo(map);
        cast.bindPopup("<b class='popTitle'>Larnach Castle</b>" +
            "<img class='popPic' src=\"images/cast.jpg\" width = '150' height='100' alt=\"Larnach Castle\">" +
            "<p class='popMain'>Specialising in Sci-Fi Cinema</p>");
        city = L.marker([-45.891681, 170.506783]).addTo(map);
        city.bindPopup("<b class='popTitle'>Dunedin City</b>" +
            "<img class='popPic' src=\"images/city.jpg\" width = '150' height='100' alt=\"The Octagon\">" +
            "<p class='popMain'>Specialising in Hitchcock Cinema</p>");
        walk = L.marker([-45.848652, 170.657501]).addTo(map);
        walk.bindPopup("<b class='popTitle'>Forrest Walk</b>" +
            "<img class='popPic' src=\"images/walks.jpg\" width = '150' height='100' alt=\"Forest\">" +
            "<p class='popMain'>Specialising in Hitchcock Cinema</p>");

        var list = [hotel, rest1, rest2, rest3, cast, city, walk];
        $(list).click(visibility);

        // map.on('click', onMapClick);
    };
    return pub;
}());

$(document).ready(Map.setup);