var Display = (function() {
    "use strict";
    var pub = {};
    function showList(cookies, total) {
        console.log(cookies);
        if (cookies.length === 0) {
            document.getElementById("display").innerHTML = "<p>No items in Cart</p>";
        } else {
            document.getElementById("display").innerHTML = cookies + "<p>Total: $" + total + "</p>";
        }
    }

    pub.setup = function() {
        var i;
        var list;
        var output = "";
        var total = 0.0;

        list = JSON.parse(Cookie.get("guest"));
        for (i = 0; i < list.length; i++) {
            output += "<li>" + list[i].title + " $" + list[i].price + "</li>";
            total += parseFloat(list[i].price);
        }
        showList(output, total);
    };
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Display.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Display.setup);
} else {
    alert("Could not attach 'Display.setup' to the 'window.onload' event");
}