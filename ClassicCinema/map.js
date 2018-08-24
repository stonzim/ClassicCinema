/* global $ */
var Map = (function() {
    "use strict";
    var pub = {};

    var center, north, south, map;

    function centreMap() {
        var markerLocation, markerBounds;
        if (this.textContent === 'Central') {
            markerLocation = [center.getLatLng()];
        } else if  (this.textContent === 'North'){
            markerLocation = [north.getLatLng()];
        } else {
            markerLocation = [south.getLatLng()];
        }
        markerBounds = L.latLngBounds(markerLocation);
        map.fitBounds(markerBounds);
    }

    pub.setup = function() {

        $("h3").click(centreMap).css("cursor", "pointer");

        map = L.map('map').setView([-45.875, 170.500], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map);

        center = L.marker([-45.875698, 170.505924]).addTo(map);
        center.bindPopup("<figure class='popup'><img src='images/Metropolis.jpg'>" +
            "<figcaption><p>Central Store</p>" +
            "<p>Specialising in Classic Cinema</p></figcaption></figure>");
        north = L.marker([-45.88729, 170.498629]).addTo(map);
        north.bindPopup("<figure class='popup'><img src='images/Plan_9_from_Outer_Space.jpg'>" +
            "<figcaption><p>South Store</p>" +
            "<p>Specialising in Classic Cinema</p></figcaption></figure>");
        south = L.marker([-45.866644, 170.514164]).addTo(map);
        south.bindPopup("<figure class='popup'><img src='images/Vertigo.jpg'>" +
            "<figcaption><p>North Store</p>" +
            "<p>Specialising in Classic Cinema</p></figcaption></figure>");
    }
    return pub;
}());

$(document).ready(Map.setup);