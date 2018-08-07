var Map = (function() {
    "use strict";
    var pub = {};
    function onMapClick(e) {
    }

    pub.setup = function() {
        var center, north, south, map;
        map = L.map('map').setView([-45.875, 170.500], 15);
        // document.getElementsByClassName("popUp").style.cssFloat = "left";
        // document.getElementsByClassName("popTitle").style.cssFloat = "left";
        // document.getElementsByClassName("popMain").style.clear = "left";

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'Map data &copy; ' + '<a href="http://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a> CC-BY-SA'}).addTo(map);
        center = L.marker([-45.875698, 170.505924]).addTo(map);
        center.bindPopup("<img class=\'popPic\' src=\"images/Gone_With_the_Wind.jpg\" alt=\"Gone With the Wind\">"
            + "<b class=\'popTitle\'>Central Store</b>" + "<p class=\'popMain\'>Specialising in Classic Cinema</p>");
        north = L.marker([-45.88729, 170.498629]).addTo(map);
        north.bindPopup("<img class='popPic' src=\"images/Forbidden_Planet.jpg\" alt=\"Forbidden Planet\">"
            + "<b class='popTitle'>Central Store</b>" + "<p class='popMain'>Specialising in Sci-Fi Cinema</p>");
        south = L.marker([-45.866644, 170.514164]).addTo(map);
        south.bindPopup("<img class='popPic' src=\"images/The_Birds.jpg\" alt=\"The Birds\">"
            + "<b class='popTitle'>Central Store</b>" + "<p class='popMain'>Specialising in Hitchcock Cinema</p>");
        map.on('click', onMapClick);
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