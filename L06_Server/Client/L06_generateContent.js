"use strict";
var L06_Server;
(function (L06_Server) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "itemChoice":
                    group = createSelect(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L06_Server.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("select");
        group.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = option.textContent = item.name;
            option.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(option);
            group.appendChild(label);
        }
        return group;
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=L06_generateContent.js.map