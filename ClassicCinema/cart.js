var Cart = (function(){
    "use strict"
    var pub = {}, i;

    function addToCart() {
       var list = [];
       var Movie = {
           title: this.parentNode.parentNode.getElementsByTagName("h3")[0].textContent,
           price: this.parentNode.getElementsByClassName("price")[0].textContent,
       };
        // console.log(JSON.stringify(Movie));
        // Cookie.set(JSON.stringify(Movie));
        if (Cookie.get("guest") === null) {
            list.push(Movie);
        } else {
            list=JSON.parse(Cookie.get("guest"));
            list.push(Movie);
        }
        // alert(list);
        Cookie.set("guest", JSON.stringify(list), 1);
    }

    pub.setup = function() {

        var buttonList = document.getElementsByClassName("buy");
        for (i = 0; i < buttonList.length; i++) {
            buttonList[i].onclick = addToCart;
        }
    };


    return pub;


}());


if (document.getElementById) {
    window.onload = Cart.setup;
}