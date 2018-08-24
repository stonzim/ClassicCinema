/*
code taken and modified from:
    https://stackoverflow.com/questions/11771400/how-to-get-the-number-of-days-between-two-dates
 */

/* global $, Cookie */
var Display = (function() {
    "use strict";
    var pub = {};

    pub.setup = function() {
        var i;
        var list;
        var output = "";
        var total = 0.0;
        var start;
        var end;
        var days;
        var oneDay = 24*60*60*1000;
        var grammar;

        list = JSON.parse(Cookie.get("guest"));
        if (list === null) {
            $("#display").html("No rooms currently selected");
        } else {
            for (i = 0; i < list.length; i++) {
                grammar = "nights";
                start = new Date(list[i].arrive);
                end = new Date(list[i].depart);
                days = Math.round(Math.abs((start.getTime() - end.getTime())/(oneDay)));
                if (days === 1) {
                    grammar = "night";
                }
                output += "<li> You booked a " + list[i].roomType + " at $" + list[i].price +" a night, " +
                    "for " + days + " " + grammar + ", which comes to $" + days*list[i].price+ ".00</li>";
                total += parseFloat(list[i].price)*days;
            }
            $("#display").html(output + "Total: $" + total);
        }
    };
    return pub;
}());

$(document).ready(Display.setup);