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
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (time === 'arrival') {
        date = $(element).val();
    } else {
        date = $(element).val();
    }

    date = reverse(date);

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '-' + mm + '-' + yyyy;

    if (date.localeCompare(today) === -1) {
        alert("Please enter a date not before today");
        if (time === 'arrival') {
            $(element).val(""); //resetting values
        } else {
            $(element).val("");
        }
        return;
    }
}

function compareDates() {
    "use strict";
    var arrive = $(".arrival").val();
    var depart = $(".departure").val();

    if (arrive === "") {
        return;
    }

    if (depart === "") {
        return;
    }

    if(! (new Date(depart).getTime() > new Date(arrive).getTime()) ) {
        alert("Please select a departure date later than your arrival");
        $(".departure").val("");
        return;

    }
}




