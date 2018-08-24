/* global $ */
var Bookings = (function() {
    "use strict";
    var pub = {};
    function parseBookings(data, target) {
        var temp = '';

        if ($(data).find("booking").length === 0) {
            $(target).html("<p>No Bookings yet</p>");
        } else {
            $(data).find("booking").each(function () {
                var number = $(this).find("number")[0].textContent;
                var name = $(this).find("name")[0].textContent;

                var start = $(this).find("checkin").find("day")[0].textContent + "-" +
                    $(this).find("checkin").find("month")[0].textContent +
                    "-" +$(this).find("checkin").find("year")[0].textContent;
                var end = $(this).find("checkout").find("day")[0].textContent + "-" +
                    $(this).find("checkout").find("month")[0].textContent +
                    "-" + $(this).find("checkout").find("year")[0].textContent;

                temp += ("<p>Room " + number + " is booked for " + name + " from " + start + " until the " + end + "</p>");
            });
            $(target).html(temp);
        }
    }
    function showBookings() {
    var target = $("#showBooking");
    var xmlSource = "data/roomBookings.xml";
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                parseBookings(data, target);
            },
            error: function() {
                $(target).html("<p>No Bookings</p>");
            },
        });
    }
    pub.setup = function() {
        showBookings();
    };
    return pub;
}());
$(document).ready(Bookings.setup);