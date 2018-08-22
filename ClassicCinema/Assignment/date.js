/*
code taken and modified from:
    https://stackoverflow.com/questions/40819789/how-to-compare-two-dates-from-input
 */

function compareDates() {
    "use strict"
    //Get the text in the elements
    var from = document.getElementById('from').textContent;
    // var from = $("#arrival").text();
    var to = document.getElementById('to').textContent;

    //Generate an array where the first element is the year, second is month and third is day
    var splitFrom = from.split('/');
    var splitTo = to.split('/');

    //Create a date object from the arrays
    var fromDate = Date.parse(splitFrom[0], splitFrom[1] - 1, splitFrom[2]);
    var toDate = Date.parse(splitTo[0], splitTo[1] - 1, splitTo[2]);

    //Return the result of the comparison
    return fromDate < toDate;
}