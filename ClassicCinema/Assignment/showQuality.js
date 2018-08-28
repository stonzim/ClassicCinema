/* global $, alert */

var ShowQuality = (function() {
    "use strict";
    var pub = {};
    var count = 0;
    var checkData;


    /* It was easier putting the parsed XML data into the variable 'checkedData' */
    /* than passing it into this method because of scopeing issues that made it had */
    /* had to have multiple items referencing DOM items and XML data in a function with */
    /* parsing data. */
    pub.getInfo = function (element) {
        count = 0;
        var type = '';
        var quality = '';
        var description = '';
        var pic;
        pub = {};
        pub.type = $(element).parent().parent().parent().find(".roomType")[0].textContent;
        pub.quality = $(element).text();

        $(checkData).find("hotelRoom").each(function () {

            var target1 = $("#qualityType");
            var target2 = $("#qualityText");
            var target3 = $("#qualityPic");

            type = $(this).find("roomType")[0].textContent;
            quality = $(this).find("quality")[0].textContent;
            description = $(this).find("description")[0].textContent;
            pic = $(this).find("image")[0].textContent;

            if (quality === pub.quality && type === pub.type) {
                $(target1).html(type + "<br>" + quality);
                $(target2).html("<p>" + description + "</p>");
                $(target3).attr("src", pic);
                $('#overlay').fadeIn(300);
                $('#close').click(function() {
                    $('#overlay').fadeOut(300);
                });
            } else {
                count++;
            }
        });
    };

    function showQuality() {
        var xmlSource = "data/hotelRooms.xml";
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                checkData = data;
            },
        });
    }

    pub.setup = function() {
        showQuality();
    };
    return pub;
}());
$(document).ready(ShowQuality.setup);
