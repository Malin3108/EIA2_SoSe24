"use strict";
var Shoppinglist;
(function (Shoppinglist) {
    function generateContent(data) {
        let shoppingListDiv = document.getElementById("shopping-list");
        for (let entry of data) {
            let div = document.createElement('div');
            let html = "";
            for (let key in entry) {
                if (Object.prototype.hasOwnProperty.call(entry, key)) {
                    let value = entry[key];
                    if (key === 'need' || key === 'bought') {
                        html += `
                        <p>${key}: <input type="checkbox" ${value ? 'checked' : ''}></p>
                    `;
                    }
                    else {
                        html += `<p>${key}: ${value}</p>`;
                    }
                }
            }
            div.innerHTML = html;
            shoppingListDiv.appendChild(div);
        }
    }
    Shoppinglist.generateContent = generateContent;
})(Shoppinglist || (Shoppinglist = {}));
//# sourceMappingURL=Generatecontent.js.map