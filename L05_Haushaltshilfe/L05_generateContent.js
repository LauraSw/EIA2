"use strict";
var L05_Haushaltshilfe;
(function (L05_Haushaltshilfe) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "shoppingItemChoice":
                    group = createShoppingSelect(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L05_Haushaltshilfe.generateContent = generateContent;
    function createShoppingSelect(_items, _category) {
        let group = document.createElement("select");
        for (let item of _items) {
            let selShopping = document.createElement("option");
            selShopping.setAttribute("price", item.price.toFixed(2));
            selShopping.value = item.name;
            selShopping.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(selShopping);
            group.appendChild(label);
        }
        return group;
    }
})(L05_Haushaltshilfe || (L05_Haushaltshilfe = {}));
//# sourceMappingURL=L05_generateContent.js.map