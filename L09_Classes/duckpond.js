"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    Ententeich.moveables = [];
    Ententeich.foods = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 6; i++) {
            let cloud = new Ententeich.Cloud(Math.random() * 500, Math.random() * 200, "white");
            Ententeich.moveables.push(cloud);
        }
        canvas.addEventListener("pointerdown", createBabyduck);
        drawBackground();
        setInterval(animate, 40);
        let duck = new Ententeich.Duck(10, 405, "yellow");
        duck.draw();
        Ententeich.moveables.push(duck);
        let duck2 = new Ententeich.Duck(100, 440, "orange");
        duck.draw();
        Ententeich.moveables.push(duck2);
        let bee = new Ententeich.Bee(10, 600, "yellow");
        bee.draw();
        Ententeich.moveables.push(bee);
        let bee2 = new Ententeich.Bee(0, 500, "yellow");
        bee.draw();
        Ententeich.moveables.push(bee2);
    }
    function animate() {
        drawBackground();
        for (let i = 0; i < Ententeich.moveables.length; i++) {
            Ententeich.moveables[i].move();
            Ententeich.moveables[i].draw();
        }
        for (let n = 0; n < Ententeich.foods.length; n++) {
            Ententeich.foods[n].draw();
        }
        drawTree();
    }
    function drawBackground() {
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        drawHills();
        drawPond();
        drawBush();
    }
    function drawHills() {
        let color = "darkgrey";
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 280);
        Ententeich.crc2.fillStyle = color;
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -50);
        Ententeich.crc2.lineTo(300, -90);
        Ententeich.crc2.lineTo(190, -50);
        Ententeich.crc2.lineTo(130, -80);
        Ententeich.crc2.lineTo(70, -70);
        Ententeich.crc2.lineTo(0, -55);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 290);
        Ententeich.crc2.fillStyle = "green";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -60);
        Ententeich.crc2.lineTo(330, -40);
        Ententeich.crc2.lineTo(240, -35);
        Ententeich.crc2.lineTo(170, -45);
        Ententeich.crc2.lineTo(100, -55);
        Ententeich.crc2.lineTo(50, -50);
        Ententeich.crc2.lineTo(0, -40);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function pseudoRandom(seed) {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    Ententeich.pseudoRandom = pseudoRandom;
    function drawPond() {
        let centerX = 220;
        let centerY = 490;
        let radiusX = 290;
        let radiusY = 120;
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fillStyle = "blue";
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function drawTree() {
        let treepositions = [[320, 370], [280, 360], [50, 340], [20, 350]];
        for (let i = 0; i < treepositions.length; i++) {
            Ententeich.crc2.save();
            Ententeich.crc2.translate(treepositions[i][0], treepositions[i][1]);
            Ententeich.crc2.fillStyle = "brown";
            Ententeich.crc2.fillRect(-10, 0, 20, -60);
            Ententeich.crc2.fillStyle = "darkgreen";
            for (let i = 0; i < 3; i++) {
                Ententeich.crc2.beginPath();
                Ententeich.crc2.arc(0, -60 - (i * 30), 40, 0, Math.PI * 2);
                Ententeich.crc2.fill();
            }
            Ententeich.crc2.restore();
        }
    }
    function drawBush() {
        let numberOfParticles = 50;
        let bushWidth = 80;
        let bushHeight = 70;
        let xPosition = 310;
        let yPosition = 590;
        let random = pseudoRandom(42);
        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (bushWidth / numberOfParticles));
            let y = yPosition + (random() * bushHeight);
            drawBushParticle(x, y);
        }
    }
    function drawBushParticle(x, y) {
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(x, y, 15, 0, Math.PI * 2);
        Ententeich.crc2.fillStyle = "#006400";
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function createBabyduck(_event) {
        let isBabyduckClicked = false;
        let clickX = _event.clientX - Ententeich.crc2.canvas.offsetLeft;
        let clickY = _event.clientY - Ententeich.crc2.canvas.offsetTop;
        for (let moveable of Ententeich.moveables) {
            if (moveable instanceof Ententeich.Duck) {
                if (moveable.x < clickX && clickX < moveable.x + 100 && moveable.y < clickY && clickY < moveable.y + 50) {
                    isBabyduckClicked = true;
                    let babyduck = new Ententeich.Babyduck(clickX + 10, clickY + 20, "red");
                    Ententeich.moveables.push(babyduck);
                    let babyduck2 = new Ententeich.Babyduck(clickX + 30, clickY + 40, "red");
                    Ententeich.moveables.push(babyduck2);
                }
            }
        }
        if (!isBabyduckClicked) {
            let food = new Ententeich.Food(clickX, clickY, "brown");
            Ententeich.foods.push(food);
            food.assignClosestDuck();
        }
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duckpond.js.map