namespace L05_Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let shoppingList:string = "";

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form =  <HTMLFormElement>document.querySelector("form");
        let order: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");

        form.addEventListener("change", handleChangeShopping);
        order.addEventListener("click", sendOrder);

        displayOrder()
    }

    async function sendOrder(_event:Event) : Promise<void> {
        console.log("send order");
        let formData: FormData = new FormData(form);
        let query:URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?"+ query.toString());
        alert("Order sent!")
    }

    function handleChangeShopping(_event: Event): void {
        displayOrder();
    }

    function displayOrder():void {
        let totalShopping:number = 5;
        let shoppingOrder: HTMLDivElement = <HTMLDivElement>document.querySelector("div#shoppingOrder");
        shoppingOrder.innerHTML = "";

        let formDataShopping: FormData = new FormData(document.forms[0]);
        for (let entry of formDataShopping) {
            let item: HTMLOptionElement = <HTMLOptionElement>document.querySelector("[value='" +  entry[1] + "']");
            //let amount: HTMLInputElement =  <HTMLInputElement>document.querySelector("[value'" + entry[2] + "']")
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
}