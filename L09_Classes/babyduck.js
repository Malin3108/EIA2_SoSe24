"use strict";
var Ententeich;
(function (Ententeich) {
    class Babyduck extends Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.scale(0.5, 0.5);
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.arc(55, 10, 15, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Babyduck = Babyduck;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=babyduck.js.map