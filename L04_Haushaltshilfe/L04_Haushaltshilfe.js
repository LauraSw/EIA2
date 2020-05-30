"use strict";
/*namespace L04_Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let totalShopping:number = 5;
    let totalWork:number=0;
    let shoppingList:string = "";
    let domesticWorkList:string = "";

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
            let amount: HTMLInputElement =  <HTMLInputElement>document.querySelector("[value'" + entry[2] + "']")
            let priceShop: number = Number(item.getAttribute("price"));
            let quantity: number = Number(item.getAttribute("quantity"));
            let result: number = quantity*priceShop;
            shoppingList+= item.value + "  € " + result + "<br>";

            totalShopping+=result;
            shoppingOrder.innerHTML = shoppingList+ "<br>" + " Total: " +totalShopping;
            console.log(formDataShopping);
            console.log(totalShopping);
        }
    }

    function handleChangeWork(_event: Event): void {
        let domesticWorkOrder: HTMLDivElement = <HTMLDivElement>document.querySelector("div#domesticWorkOrder");
        domesticWorkOrder.innerHTML = "";

        let formDataWork: FormData = new FormData(document.forms[1]);
        for (let entry of formDataWork) {
            let work: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(work.getAttribute("price"));

            domesticWorkList+= work.value + " € " + price + "<br>";

            totalWork+=price;
            domesticWorkOrder.innerHTML += domesticWorkList + "<br>" + " Total: "+totalWork;
            console.log(totalWork);
        }
    }
}
*/ 
//# sourceMappingURL=L04_Haushaltshilfe.js.map