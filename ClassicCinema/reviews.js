/* global $ */
var Reviews = (function() {
    "use strict";
    var pub = {};
    function parseReviews(data, target) {
        var temp = '';

        if ($(data).find("review").length === 0) {
            $(target).html("<p>No reviews yet</p>");
        } else {
            $(data).find("review").each(function () {
                var rating = $(this).find("rating")[0].textContent;
                var user = $(this).find("user")[0].textContent;
                temp += ("<p>" + user + "gives this movie a rating of " + rating + "</p>");
            });
            $(target).html(temp);
        }
    }
    function showReviews() {
    var target = $(this).parent().find(".review")[0];
    var image = $(this).parent().find("img")[0].getAttribute("src");
    var xmlSource = image.replace("jpg", "xml").replace("images/","reviews/");
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                parseReviews(data, target);
            },
            error: function() {
                $(target).html("<p>No reviews yet</p>");
            }
        });
    }
    pub.setup = function() {
        $(".film").append("<input type=\"button\" class=\"showReviews\" value=\"Show Reviews\">\n" +
            "<div class=\"review\"></div>");
        $(".showReviews").click(showReviews);
    }
    return pub;
}());
$(document).ready(Reviews.setup);