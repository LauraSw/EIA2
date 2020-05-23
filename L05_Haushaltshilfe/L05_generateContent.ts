namespace L05_Haushaltshilfe{

        export interface Item {
            name: string;
            price: number;
        }
    
        export interface Data {
            [category: string]: Item[];
        }
    

    export function generateContent (_data: Data){

        for(let category in _data) {
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
                case "shoppingItemChoice":
                    group = createShoppingSelect(items, category);
                    break;

                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
                
        }
    }
function createShoppingSelect(_items: Item[], _category: string): HTMLElement | null {
    let group: HTMLSelectElement = document.createElement("select");
    for(let item of _items){
        let selShopping: HTMLOptionElement = document.createElement("option");
        selShopping.setAttribute("price", item.price.toFixed(2));
        selShopping.value = item.name;
        selShopping.id = item.name;

        let label : HTMLLabelElement = document.createElement("label");
        label.textContent = item.name;
        label.htmlFor = item.name;

        group.appendChild(selShopping);
        group.appendChild(label);
    }
    return group;

}

}