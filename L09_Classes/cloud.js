"use strict";
var Ententeich;
(function (Ententeich) {
    class Cloud {
        position;
        color;
        size;
        constructor() {
            console.log("Cloud Constructor");
        }
        move() {
            console.log("Cloud move");
        }
        draw() {
            console.log("Cloud draw");
            let numberOfParticles = 50;
            let cloudWidth = 120;
            let cloudHeight = 40;
            let xPosition = 40;
            let yPosition = 50;
            let random = Ententeich.pseudoRandom(42);
            for (let i = 0; i < numberOfParticles; i++) {
                let x = xPosition + (i * (cloudWidth / numberOfParticles));
                let y = yPosition + (random() * cloudHeight);
                this.drawCloudParticle(x, y);
            }
        }
        drawCloudParticle(x, y) {
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
    }
    Ententeich.Cloud = Cloud;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=cloud.js.map