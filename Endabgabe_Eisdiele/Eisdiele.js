"use strict";
var Eisdiele;
(function (Eisdiele) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", changeMood);
    window.addEventListener("click", tableClicked);
    Eisdiele.customers = [];
    Eisdiele.customerRadius = 90 * 0.5;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Eisdiele.crc2 = canvas.getContext("2d");
        let customer = new Eisdiele.Customer(100, 600, "yellow", "happy");
        Eisdiele.customers.push(customer);
        setInterval(createCustomer, 10000);
        animate();
    }
    function changeMood(_event) {
        if (_event.code === "Space") {
            for (let customer of Eisdiele.customers) {
                customer.changeMood();
            }
        }
    }
    function createCustomer() {
        // Define the range for random positions
        let minX = 10;
        let maxX = 600;
        let minY = 400;
        let maxY = 850;
        let x;
        let y;
        let validPosition = false;
        // Keep generating positions until a valid one is found
        while (!validPosition) {
            x = Math.random() * (maxX - minX) + minX;
            y = Math.random() * (maxY - minY) + minY;
            validPosition = true;
            for (let customer of Eisdiele.customers) {
                const distance = Math.sqrt((x - customer.x) ** 2 + (y - customer.y) ** 2);
                if (distance < Eisdiele.customerRadius * 2) {
                    validPosition = false;
                    break;
                }
            }
        }
        let color = "yellow"; // You can change this to randomize colors if needed
        let customer = new Eisdiele.Customer(x, y, color, "happy");
        Eisdiele.customers.push(customer);
    }
    function animate() {
        drawBackground();
        for (let i = 0; i < Eisdiele.customers.length; i++) {
            Eisdiele.customers[i].move();
            Eisdiele.customers[i].draw();
        }
        requestAnimationFrame(animate);
    }
    function drawBackground() {
        Eisdiele.crc2.fillStyle = "beige";
        Eisdiele.crc2.fillRect(0, 0, Eisdiele.crc2.canvas.width, Eisdiele.crc2.canvas.height);
        drawCounter();
        drawTable();
        drawStool();
    }
    function drawCounter() {
        let counter = new Eisdiele.Counter(800, 500, "brown");
        counter.draw();
    }
    function drawTable() {
        let table = new Eisdiele.Table(1200, 200, "brown");
        table.draw();
        let table2 = new Eisdiele.Table(200, 200, "brown");
        table2.draw();
        let table3 = new Eisdiele.Table(700, 200, "brown");
        table3.draw();
    }
    function drawStool() {
        let stool = new Eisdiele.Stool(1100, 240, "brown");
        stool.draw();
        let stool2 = new Eisdiele.Stool(100, 240, "brown");
        stool2.draw();
        let stool3 = new Eisdiele.Stool(600, 240, "brown");
        stool3.draw();
        let stool4 = new Eisdiele.Stool(1450, 240, "brown");
        stool4.draw();
        let stool5 = new Eisdiele.Stool(450, 240, "brown");
        stool5.draw();
        let stool6 = new Eisdiele.Stool(950, 240, "brown");
        stool6.draw();
    }
    // Table is Clicked
    function tableClicked(event) {
        let clickX = event.clientX;
        let clickY = event.clientY;
        let tables = [new Eisdiele.Table(1200, 200, "brown"), new Eisdiele.Table(200, 200, "brown"), new Eisdiele.Table(700, 200, "brown")];
        for (let table of tables) {
            if (table.state === "free") {
                if (clickX >= table.x && clickX <= table.x + 200 && clickY >= table.y && clickY <= table.y + 100) {
                    for (let customer of Eisdiele.customers) {
                        if (customer.state === "waiting") {
                            customer.state = "coming";
                            customer.targetPositionX = table.x;
                            customer.targetPositionY = table.y;
                            table.state = "occupied";
                            break;
                        }
                    }
                }
            }
        }
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Eisdiele.js.map