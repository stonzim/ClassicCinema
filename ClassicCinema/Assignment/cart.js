/* global $, Cookie, alert */

function addToBookings(element, cost) {
    "use strict";
    /* I had trouble using 'true', so I just used a String literal */
    if (Bookings.checkOverlap(element) === "true") {
        var list = [];
        var temp = $(element).parent().parent().parent().find(".roomType")[0].textContent;
        var temp3 = $(element).parent().parent().find(".arrival").val();
        var temp4 = $(element).parent().parent().find(".departure").val();

        /* Must jave both input dates with data upon submission */
        if (temp3 === "" || temp4 === "") {
            alert("Please enter arrival and departure dates")
            return;
        }

        /* Our booking object */
        var Booking = {
            /*jshint -W040*/
            roomType: temp,
            price: cost,
            arrive: temp3,
            depart: temp4,
            /*jshint +W040*/
        };

        if (Cookie.get("guest") === null) {
            list.push(Booking);
        } else {
            list = JSON.parse(Cookie.get("guest"));
            list.push(Booking);
        }
        Cookie.set("guest", JSON.stringify(list), 1);
        $(element).parents().parents().find(".arrival").val("");
        $(element).parents().parents().find(".departure").val("");
    } else {
        alert("There is an overlap between your dates and a current booking. Please check availability again.");
        $(element).parents().parents().find(".arrival").val("");
        $(element).parents().parents().find(".departure").val("");
    }
}
