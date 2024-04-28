namespace Shoppinglist {

    export function generateContent(data: any[]) {
        let shoppingListDiv: HTMLElement | null = document.getElementById("shopping-list");


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
                    } else {
                        html += `<p>${key}: ${value}</p>`;
                    }
                }
            }

            div.innerHTML = html;
            shoppingListDiv.appendChild(div);
        }
    }

}
