/*
code taken and modified from:
    https://stackoverflow.com/questions/22784883/check-if-more-than-two-date-ranges-overlap
 */

/* global $, alert */
var Bookings = (function() {
    "use strict";
    var count = 0;
    var pub = {};
    var checkData;
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

     pub.checkAvailability = function(element, room) {
        var temp = '';
         count = 0;
         if ($(checkData).find("booking").length === 0) {
             $(element).parent().children("span.currentBookings").html("<p>No Bookings for this room yet</p>");
         } else {
             $(checkData).find("booking").each(function () {
                 if (room === $(this).find("roomType")[0].textContent) {
                     count++;
                     var start = $(this).find("checkin").find("day")[0].textContent + "-" +
                         $(this).find("checkin").find("month")[0].textContent +
                         "-" + $(this).find("checkin").find("year")[0].textContent;
                     var end = $(this).find("checkout").find("day")[0].textContent + "-" +
                         $(this).find("checkout").find("month")[0].textContent +
                         "-" + $(this).find("checkout").find("year")[0].textContent;
                     if (count === 1) {
                         temp += ("<p>This room is booked from the " + start + " until the " + end + "</p>");
                     }
                 }
             });
             if (count === 0) {
                 $(element).parent().children("span.currentBookings").html("<p>No Bookings for this room yet</p>");
             } else {
             $(element).parent().children("span.currentBookings").html(temp);
            }
         }
    };

    pub.checkOverlap = function(element) {
        var oneDay = 24*60*60*1000;
        var room = $(element).parent().parent().parent().parent().find("h3")[0].textContent;
        var queryStart = new Date($(".arrival").val());
        var queryEnd = new Date($(".departure").val());
        var flag = "true";

        if ($(checkData).find("booking").length !== 0) {
            $(checkData).find("booking").each(function () {

                if ($(this).find("roomType")[0].textContent === room) {
                    var temp = $(this).find("checkin").find("year")[0].textContent + "-" +
                        $(this).find("checkin").find("month")[0].textContent + "-" +
                        $(this).find("checkin").find("day")[0].textContent;
                    var bookedStart = new Date(temp);

                    var temp2 = $(this).find("checkout").find("year")[0].textContent + "-" +
                        $(this).find("checkout").find("month")[0].textContent + "-" +
                        $(this).find("checkout").find("day")[0].textContent;
                    var bookedEnd = new Date(temp2);

                    queryStart = (Math.round(queryStart.getTime()/oneDay));
                    bookedEnd = (Math.round(bookedEnd.getTime()/oneDay));
                    queryEnd = Math.round(Math.abs(queryEnd.getTime()/oneDay));
                    bookedStart = Math.round(Math.abs(bookedStart.getTime()/oneDay));

                    if (queryStart < bookedEnd && queryEnd > bookedStart) {
                        flag = "false";
                    }
                }
            });
            return flag;
        }
    };

    function showBookings() {
    var target = $("#showBooking");
    var xmlSource = "data/roomBookings.xml";
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                parseBookings(data, target);
                checkData = data;
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