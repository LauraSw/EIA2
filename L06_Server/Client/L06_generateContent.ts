namespace L06_Server{

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
                case "itemChoice":
                    group = createSelect(items, category);
                    break;

                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
                
        }
    }
function createSelect(_items: Item[], _category: string): HTMLElement | null {
    let group: HTMLSelectElement = document.createElement("select");
    group.name= _category;
    for(let item of _items){
        let option: HTMLOptionElement = document.createElement("option");
        option.setAttribute("price", item.price.toFixed(2));
        option.value = option.textContent=item.name;
        option.id = item.name;

        let label : HTMLLabelElement = document.createElement("label");
        label.textContent = item.name;
        label.htmlFor = item.name;

        group.appendChild(option);
        group.appendChild(label);
    }
    return group;

}

}