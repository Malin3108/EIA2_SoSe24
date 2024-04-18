namespace Shoppinglist{   
document.addEventListener("DOMContentLoaded", () => {
    const productInput = document.getElementById("product");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");
    const commentsInput = document.getElementById("comments");
    const check1Input = document.getElementById("check1");
    const check2Input = document.getElementById("check2");

    if (productInput) {
        productInput.addEventListener("input", () => {
            console.log("Produkt wurde hinzugefügt");
        });
    }

    if (amountInput) {
        amountInput.addEventListener("change", () => {
            console.log("Menge wurde verändert");
        });
    }

    if (dateInput) {
        dateInput.addEventListener("change", () => {
            console.log("Datum wurde verändert");
        });
    }

    if (commentsInput) {
        commentsInput.addEventListener("input", () => {
            console.log("Kommentar wurde hinzugefügt");
        });
    }

    if (check1Input) {
        check1Input.addEventListener("change", () => {
            console.log("Dein Produkt soll gekauft werden");
        });
    }

    if (check2Input) {
        check2Input.addEventListener("change", () => {
            console.log("Dein Produkt wurde gekauft");
        });
    }
});
}

