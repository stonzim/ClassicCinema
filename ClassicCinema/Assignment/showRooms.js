/* global $, alert */

var ShowRooms = (function() {
    "use strict";
    var pub = {};
    var count = 0;

    function parseRooms(data) {
        var sections = $(".room");
        var section;
        var type = '';
        var description = '';
        var price1 = '';
        var price2 = '';
        var pic = '';

        $(data).find("roomType").each(function () {
            section = sections[count];

            /* Targets for displaying info */
            var target1 = $(section).find(".roomType");
            var target2 = $(section).find(".roomText");
            var target3 = $(section).find(".price1");
            var target4 = $(section).find(".price2");
            var target5 = $(section).find(".roomPic");

            /* Taking room info from XML */
            type = $(this).find("id")[0].textContent;
            description = $(this).find("description")[0].textContent;
            price1 = $(this).find("price1")[0].textContent;
            price2 = $(this).find("price2")[0].textContent;
            pic = $(this).find("image")[0].textContent;

            $(target1).html(type);
            $(target2).html(description);
            $(target3).html(price1);
            $(target4).html(price2);
            $(target5).attr("src", pic);
            count++;
        });
    }

    function showRooms() {
        var xmlSource = "data/roomTypes.xml";
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                parseRooms(data);
            },
            error: function () {
              alert("XML file failed to load");
              return;
            },
        });
    }
    pub.setup = function() {
            showRooms();
    };
    return pub;
}());
$(document).ready(ShowRooms.setup);






