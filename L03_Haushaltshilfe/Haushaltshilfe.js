"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
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
            let quantity = ;
            let unit = ;
            let shop = ;
            let price = Number(item.getAttribute("price"));
            shoppingOrder.innerHTML += quantity.value + unit.value + item.name + price + "  € ";
            console.log(formDataShopping);
        }
    }
    function handleChangeWork(_event) {
        let domesticWorkOrder = document.querySelector("div#domestikWorkOrder");
        domesticWorkOrder.innerHTML = "";
        let formDataWork = new FormData(document.forms[0]);
        for (let entry of formDataWork) {
            let work = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(work.getAttribute("price"));
            domesticWorkOrder.innerHTML += work.name + price + "  € ";
        }
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=Haushaltshilfe.js.map