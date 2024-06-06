"use strict";
var Ententeich;
(function (Ententeich) {
    class Bee extends Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += 1;
            this.y -= 1;
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = 0;
            }
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.ellipse(35, 35, 10, 5, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Bee = Bee;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bee.js.map