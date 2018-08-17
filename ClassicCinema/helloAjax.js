/* global $ */
function doAjax() {
    "use strict";
    $("#helloResult").load("ajaxResponse.html");
}
function setup() {
    "use strict";
    $("#helloButton").click(doAjax);
}
$(document).ready(setup);