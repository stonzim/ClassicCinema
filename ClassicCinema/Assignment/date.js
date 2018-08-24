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

function checkToday() {
    "use strict";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var date = $("#departure").val(); /*need to fix this!!!!!!*/
    // var date = $(this).val();
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
        document.getElementById("arrival").value="";
        document.getElementById("departure").value="";
        return;
    }
}

function compareDates() {
    "use strict";
    var arrive = document.getElementById("arrival").value;
    // var arrive = $("#arrival").val();
    var depart = document.getElementById("departure").value;
    // var depart = $("#arrival").val();

    if (arrive === "") {
        return;
    }

    if (depart === "") {
        return;
    }

    if(! (new Date(depart).getTime() > new Date(arrive).getTime()) ) {
        alert("Please select a departure date later than your arrival");
        document.getElementById("arrival").value="";
        document.getElementById("departure").value="";
        return;
    } else {
        window.location.href = "admin.html";
    }
}




