"use strict";
var L04_Haushaltshilfe;
(function (L04_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let totalShopping = 5;
    let totalWork = 0;
    let shoppingList = "";
    let domesticWorkList = "";
    function handleLoad(_event) {
        console.log("Start");
        let formShopping = document.querySelector("div#divShopping");
        let formWork = document.querySelector("div#divWork");
        formShopping.addEventListener("change", handleChangeShopping);
        formWork.addEventListener("change", handleChangeWork);
    }
    function handleChangeShopping(_event) {
        let shoppingOrder = document.querySelector("div#shoppingOrder");
        shoppingOrder.innerHTML = "";
        let formDataShopping = new FormData(document.forms[0]);
        for (let entry of formDataShopping) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let amount = document.querySelector("[value'" + entry[2] + "']");
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
    function handleChangeWork(_event) {
        let domesticWorkOrder = document.querySelector("div#domesticWorkOrder");
        domesticWorkOrder.innerHTML = "";
        let formDataWork = new FormData(document.forms[1]);
        for (let entry of formDataWork) {
            let work = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(work.getAttribute("price"));
            domesticWorkList += work.value + " € " + price + "<br>";
            totalWork += price;
            domesticWorkOrder.innerHTML += domesticWorkList + "<br>" + " Total: " + totalWork;
            console.log(totalWork);
        }
    }
})(L04_Haushaltshilfe || (L04_Haushaltshilfe = {}));
//# sourceMappingURL=L04_Haushaltshilfe.js.map