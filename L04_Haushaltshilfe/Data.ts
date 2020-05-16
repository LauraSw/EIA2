namespace L04_Haushaltshilfe {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        shoppingItem: [
            { name: "strawberries", price: 5.00 },
            { name: "eggs", price: 0.40},
            { name: "milk", price: 2.00 }
        ],
        Work: [
            { name: "cooking", price: 10.00 },
            { name: "cleaning", price: 20.00 },
            { name: "tidyUp", price: 10.00 },
        ]
    };


}