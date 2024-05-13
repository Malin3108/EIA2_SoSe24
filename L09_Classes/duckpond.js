"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        drawBackground();
        drawHills();
        drawCloud();
        drawNewCloud();
        drawHut();
        drawTree();
        drawPond();
        drawBush();
        drawNewBush();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
    }
    function drawHills() {
        console.log("Mountain");
        let color = "darkgreen";
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
    function drawHut() {
        console.log("House");
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(20, 380);
        Ententeich.crc2.fillStyle = "beige";
        Ententeich.crc2.strokeStyle = "black";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(50, 0);
        Ententeich.crc2.lineTo(50, -50);
        Ententeich.crc2.lineTo(0, -50);
        Ententeich.crc2.lineTo(0, 0);
        Ententeich.crc2.moveTo(0, -50);
        Ententeich.crc2.lineTo(20, -75);
        Ententeich.crc2.lineTo(70, -75);
        Ententeich.crc2.lineTo(50, -50);
        Ententeich.crc2.moveTo(50, -50);
        Ententeich.crc2.lineTo(80, -60);
        Ententeich.crc2.lineTo(70, -75);
        Ententeich.crc2.moveTo(80, -60);
        Ententeich.crc2.lineTo(80, -20);
        Ententeich.crc2.lineTo(50, 0);
        Ententeich.crc2.lineTo(50, -50);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.stroke();
        Ententeich.crc2.restore();
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(82, 372);
        Ententeich.crc2.fillStyle = "black";
        Ententeich.crc2.strokeStyle = "black";
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(10, -6);
        Ententeich.crc2.lineTo(10, -40);
        Ententeich.crc2.lineTo(0, -35);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.stroke();
        Ententeich.crc2.restore();
    }
    function drawTree() {
        console.log("Tree draw");
        Ententeich.crc2.save();
        Ententeich.crc2.translate(390, 320);
        Ententeich.crc2.fillStyle = "brown";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(10, 40);
        Ententeich.crc2.lineTo(-70, 30);
        Ententeich.crc2.lineTo(-48, -20);
        Ententeich.crc2.lineTo(-45, -30);
        Ententeich.crc2.lineTo(-40, -100);
        Ententeich.crc2.lineTo(-200, -120);
        Ententeich.crc2.lineTo(-100, -120);
        Ententeich.crc2.lineTo(-100, -170);
        Ententeich.crc2.lineTo(-60, -110);
        Ententeich.crc2.lineTo(-50, -150);
        Ententeich.crc2.lineTo(-100, -170);
        Ententeich.crc2.lineTo(-140, -170);
        Ententeich.crc2.lineTo(-100, -180);
        Ententeich.crc2.lineTo(-140, -190);
        Ententeich.crc2.lineTo(-100, -185);
        Ententeich.crc2.lineTo(-65, -170);
        Ententeich.crc2.lineTo(-20, -140);
        Ententeich.crc2.lineTo(-20, -150);
        Ententeich.crc2.lineTo(-150, -250);
        Ententeich.crc2.lineTo(-90, -220);
        Ententeich.crc2.lineTo(-30, -190);
        Ententeich.crc2.lineTo(0, -230);
        Ententeich.crc2.lineTo(0, -200);
        Ententeich.crc2.lineTo(-5, -150);
        Ententeich.crc2.lineTo(0, -160);
        Ententeich.crc2.lineTo(0, -130);
        Ententeich.crc2.lineTo(-5, -100);
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function drawCloud() {
        console.log("Forrest");
        let numberOfParticles = 90;
        let cloudWidth = 170;
        let cloudHeight = 50;
        let xPosition = 120;
        let yPosition = 90;
        let random = pseudoRandom(42);
        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles));
            let y = yPosition + (random() * cloudHeight);
            drawCloudParticle(x, y);
        }
    }
    function drawNewCloud() {
        console.log("Forrest");
        let numberOfParticles = 30;
        let cloudWidth = 100;
        let cloudHeight = 20;
        let xPosition = 0;
        let yPosition = 160;
        let random = pseudoRandom(42);
        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles));
            let y = yPosition + (random() * cloudHeight);
            drawCloudParticle(x, y);
        }
    }
    function drawCloudParticle(x, y) {
        let gradient = Ententeich.crc2.createRadialGradient(x, y, 0, x, y, 15);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(x, y, 15, 0, Math.PI * 2);
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
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
    function drawBush() {
        let numberOfParticles = 50;
        let cloudWidth = 80;
        let cloudHeight = 70;
        let xPosition = 310;
        let yPosition = 590;
        let random = pseudoRandom(42);
        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles));
            let y = yPosition + (random() * cloudHeight);
            drawBushParticle(x, y);
        }
    }
    function drawNewBush() {
        console.log("Forrest");
        let numberOfParticles = 80;
        let cloudWidth = 100;
        let cloudHeight = 70;
        let xPosition = 0;
        let yPosition = 560;
        let random = pseudoRandom(42);
        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles));
            let y = yPosition + (random() * cloudHeight);
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
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duckpond.js.map