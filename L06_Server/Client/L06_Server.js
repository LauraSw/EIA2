"use strict";
var L06_Server;
(function (L06_Server) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://haushaltshilfefuereia.herokuapp.com";
    async function handleLoad(_event) {
        console.log("Init");
        let response = await fetch("L06_Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06_Server.generateContent(data);
        form = document.querySelector("form");
        let order = document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);
        order.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 5;
        let order = document.querySelector("div#shoppingOrder");
        order.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "quantity":
                    break;
                case "itemChoice":
                    let quantity = Number(formData.get("quantity"));
                    itemPrice = quantity * itemPrice;
                    order.innerHTML += quantity + "kg" + item.value + ": Euro" + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": Euro" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        order.innerHTML += "<p>Total: : Euro" + price.toFixed(2);
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=L06_Server.js.map