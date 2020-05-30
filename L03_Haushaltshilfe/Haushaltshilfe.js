"use strict";
/*  namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let formShopping: HTMLDivElement = <HTMLDivElement>document.querySelector("div#divShopping");
        let formWork: HTMLInputElement = <HTMLInputElement>document.querySelector("div#divWork");

        formShopping.addEventListener("change", handleChangeShopping);
        formWork.addEventListener("change", handleChangeWork);
    }

    function handleChangeShopping(_event: Event): void {
        let shoppingOrder: HTMLDivElement = <HTMLDivElement>document.querySelector("div#shoppingOrder");
        shoppingOrder.innerHTML = "";

        let formDataShopping: FormData = new FormData(document.forms[0]);
        for (let entry of formDataShopping) {
           let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let quantity:HTMLInputElement = ;
           let unit:HTMLInputElement =;
          let shop:HTMLInputElement=;
           let price: number = Number(item.getAttribute("price"));
            

           // shoppingOrder.innerHTML += quantity.value + unit.value + item.name + price + "  € ";
            console.log(formDataShopping);
        }
    }

    function handleChangeWork(_event: Event): void {
        let domesticWorkOrder: HTMLDivElement = <HTMLDivElement>document.querySelector("div#domestikWorkOrder");
        domesticWorkOrder.innerHTML = "";

        let formDataWork: FormData = new FormData(document.forms[0]);
        for (let entry of formDataWork) {
            let work: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(work.getAttribute("price"));

            domesticWorkOrder.innerHTML += work.name + price + "  € " ;
        }
    }
}
*/ 
//# sourceMappingURL=Haushaltshilfe.js.map