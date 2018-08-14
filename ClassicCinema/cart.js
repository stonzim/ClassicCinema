/* global $, Cookie */
var Cart = (function(){
    "use strict";
    var pub = {}, i;

    function addToCart() {
        var list = [];
        var temp = $(this).parent().parent().find("h3")[0].textContent;
        var temp2 =  $(this).parent().parent().find(".price")[0].textContent;
        var Movie = {
           /*jshint -W040*/
           title: temp,
           price: temp2,
           /*jshint +W040*/
       };
        if (Cookie.get("guest") === null) {
            list.push(Movie);
        } else {
            list=JSON.parse(Cookie.get("guest"));
            list.push(Movie);
        }
        Cookie.set("guest", JSON.stringify(list), 1);
    }

    pub.setup = function() {
        $('.buy').click(addToCart);
        };
    return pub;
}());

$(document).ready(Cart.setup);