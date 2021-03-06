namespace L06_Server {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let url : string = "https://haushaltshilfefuereia.herokuapp.com"


    async function handleLoad(_event: Event): Promise<void> {
        console.log("Init");

        let response: Response = await fetch("L06_Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form =  <HTMLFormElement>document.querySelector("form");
        let order: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");

        form.addEventListener("change", handleChange);
        order.addEventListener("click", sendOrder);

        displayOrder()
    }

    async function sendOrder(_event:Event) : Promise<void> {
        console.log("Send order");
        let formData: FormData = new FormData(form);
        let query:URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?"+ query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder():void {
        let price:number = 5;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#shoppingOrder");
        order.innerHTML = "";

        let formData: FormData = new FormData(form);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]){
                case "quantity":
                    break;
                case "itemChoice":
                    let quantity: number = Number (formData.get ("quantity"));
                    itemPrice = quantity * itemPrice;
                    order.innerHTML += quantity + "kg" + item.value +": Euro" + itemPrice + "<br>";
                break;
                default: 
                    order.innerHTML += item.value + ": Euro" + itemPrice.toFixed(2) + "<br>";
            }

            price += itemPrice;
        }
        order.innerHTML += "<p>Total: : Euro" + price.toFixed(2);
    }
}