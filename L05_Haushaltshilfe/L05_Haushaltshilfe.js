"use strict";
var L05_Haushaltshilfe;
(function (L05_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let form;
    let shoppingList = "";
    async function handleLoad(_event) {
        console.log("Start");
        let response = await fetch("L05_Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L05_Haushaltshilfe.generateContent(data);
        form = document.querySelector("form");
        let order = document.querySelector("button[type=submit]");
        form.addEventListener("change", handleChangeShopping);
        order.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
    }
    function handleChangeShopping(_event) {
        displayOrder();
    }
    function displayOrder() {
        let totalShopping = 5;
        let shoppingOrder = document.querySelector("div#shoppingOrder");
        shoppingOrder.innerHTML = "";
        let formDataShopping = new FormData(document.forms[0]);
        for (let entry of formDataShopping) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            //let amount: HTMLInputElement =  <HTMLInputElement>document.querySelector("[value'" + entry[2] + "']")
            let priceShop = Number(item.getAttribute("price"));
            let quantity = Number(item.getAttribute("quantity"));
            let result = quantity * priceShop;
            shoppingList += item.value + "  € " + result + "<br>";
            totalShopping += result;
            shoppingOrder.innerHTML = shoppingList + "<br>" + " Total: " + totalShopping;
            console.log(formDataShopping);
            console.log(totalShopping);
        }
    }
})(L05_Haushaltshilfe || (L05_Haushaltshilfe = {}));
//# sourceMappingURL=L05_Haushaltshilfe.js.map