/* global $, Cookie */
var Cart = (function(){
    "use strict";
    var pub = {}, i;

    function addToCart() {
        // alert($(this).parent().parent().find("h3")[0].textContent);
        var list = [];
        var temp = $(this).parent().parent().find("h3")[0].textContent;
        var temp2 =  $(this).parent().find("price")[0].text();
       var Movie = {
           /*jshint -W040*/
           title: temp,
           price: temp2,
           /*jshint +W040*/
           // price: this.parentNode.getElementsByClassName("price")[0].textContent,
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
        // var buttonList = document.getElementsByClassName("buy");
        // for (i = 0; i < buttonList.length; i++) {
        //     buttonList[i].onclick = addToCart;
        // }
        console.log($(this).parent().parent().find("h3")[0]);
        console.log($(this).parent().find("price")[0]);

        // console.log($(this).parent().parent().find("h3")[0].textContent());
    };
    return pub;
}());

// if (document.getElementById) {
//     window.onload = Cart.setup;
// }
$(document).ready(Cart.setup);