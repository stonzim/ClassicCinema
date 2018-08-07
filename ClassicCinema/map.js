
var Map = (function() {
    "use strict";
    var pub = {};

    var center, north, south, map;

    function centreMap(e) {
        var markerLocation, markerBounds;
        if (this.textContent === 'Central') {
            markerLocation = [center.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
        } else if  (this.textContent === 'North'){
            markerLocation = [north.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
        } else {
            markerLocation = [south.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
        }
    }

    pub.setup = function() {
        var headings, i;

        headings = document.getElementsByTagName("h3");
        for (i = 0; i < headings.length; i+=1) {
            headings[i].style.cursor = "pointer";
            headings[i].onclick = centreMap;
        }

        map = L.map('map').setView([-45.875, 170.500], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'Map data &copy; ' + '<a href="http://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a> CC-BY-SA'}).addTo(map);

        center = L.marker([-45.875698, 170.505924]).addTo(map);
        center.bindPopup("<b class=\'popTitle\'>Central Store</b>" +
            "<img class=\'popPic\' src=\"images/Gone_With_the_Wind.jpg\" alt=\"Gone With the Wind\">" + "<p class=\'popMain\'>Specialising in Classic Cinema</p>");
        north = L.marker([-45.88729, 170.498629]).addTo(map);
        north.bindPopup("<b class='popTitle'>North Store</b>"
            + "<img class='popPic' src=\"images/Forbidden_Planet.jpg\" alt=\"Forbidden Planet\">" + "<p class='popMain'>Specialising in Sci-Fi Cinema</p>");
        south = L.marker([-45.866644, 170.514164]).addTo(map);
        south.bindPopup("<b class='popTitle'>South Store</b>"
            + "<img class='popPic' src=\"images/The_Birds.jpg\" alt=\"The Birds\">" + "<p class='popMain'>Specialising in Hitchcock Cinema</p>");
    }
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Map.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Map.setup);
} else {
    alert("Could not attach 'Display.setup' to the 'window.onload' event");
}