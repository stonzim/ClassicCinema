var Display = (function() {
    "use strict";
    var pub = {};
    function showList(cookies, total) {

    }

    pub.setup = function() {
        var i;
        var list;
        var output = "";
        var total = 0.0;

        list = JSON.parse(Cookie.get("guest"));
        if (list === null) {
            $("#display").html("No items in Cart");
            $("#checkoutForm").css({"display": "none"});
        } else {
            for (i = 0; i < list.length; i++) {
                output += "<li>" + list[i].title + " $" + list[i].price + "</li>";
                total += parseFloat(list[i].price);
            }
            $("#display").html(output + "Total: $" + total);
        }
    };
    return pub;
}());

$(document).ready(Display.setup);