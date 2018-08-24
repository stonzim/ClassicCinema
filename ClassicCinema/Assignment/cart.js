/* global $, Cookie, alert */

function addToBookings(element) {
    "use strict";
    var list = [];
    var temp = $(element).parent().parent().parent().parent().find("h3")[0].textContent;
    var temp2 =  $(element).parent().parent().find(".price")[0].textContent;
    var temp3 = $(".arrival").val();
    var temp4 = $(".departure").val();

    if (temp3 === "" || temp4 === "") {
        alert("Please enter arrival and departure dates")
        return;
        }

    var Booking = {
       /*jshint -W040*/
        roomType: temp,
        price: temp2,
        arrive: temp3,
        depart: temp4,
       /*jshint +W040*/
   };

    if (Cookie.get("guest") === null) {
        list.push(Booking);
    } else {
        list=JSON.parse(Cookie.get("guest"));
        list.push(Booking);
    }
    Cookie.set("guest", JSON.stringify(list), 1);
}
    