var Display = (function() {
    "use strict"
    var pub = {};
    function showList() {
        document.getElementById("display").innerHTML = output;
    }

    pub.setup = function() {
        var i;
        var list;
        var output = "";

        list = JSON.parse(Cookie.get("guest"));
        for (i = 0; i < list.length; i++) {
            output += list[i].title + " $" + list[i].price;
        }
    };
    return pub;
}());