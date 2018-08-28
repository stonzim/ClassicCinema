/*
code taken and modified from:
    https://stackoverflow.com/questions/40819789/how-to-compare-two-dates-from-input
    https://stackoverflow.com/questions/34747467/how-do-i-compare-2-dates-in-html5
    https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
 */

/* global $, alert */

function reverse(s){
    "use strict";

    var list;
    list = s.split("-");
    return list.reverse().join("-");
}

function checkToday(element, time) {
    "use strict";
    var date;
    var today = new Date();
    
    if (time === 'arrival') {
        date = $(element).val();
    } else {
        date = $(element).parent().find(".departure").val();
    }

    date = new Date(date);

    if (date < today) {
        alert("Please enter a date not before today");
        if (time === 'arrival') {
            $(element).val(""); //resetting values
        } else {
            $(element).parent().find(".departure").val("");
        }
        return;
    }
}

function compareDates(element, time) {
    "use strict";
    var arrive;
    var depart;
    if (time === 'arrival') {
        arrive = $(element).val();
        depart = $(element).parent().find(".departure").val();
    } else {
        depart = $(element).val();
        arrive= $(element).parent().find(".arrival").val();
    }

    if (arrive === "") {
        return;
    }

    if (depart === "") {
        return;
    }

    if(! (new Date(depart).getTime() > new Date(arrive).getTime()) ) {
        alert("Please select a departure date later than your arrival");
        if (time === 'arrival') {
            $(element).parent().find(".departure").val("");
            return;
        } else {
            $(element).val("");
        }
    }
}




