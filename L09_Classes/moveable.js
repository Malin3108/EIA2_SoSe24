"use strict";
var Ententeich;
(function (Ententeich) {
    class Moveable {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.draw();
            this.move();
        }
        move() {
            this.x += 1;
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = -100;
            }
        }
        draw() {
        }
    }
    Ententeich.Moveable = Moveable;
})(Ententeich || (Ententeich = {}));
/* let m: Moveable = new Moveable();
let duck: Duck = new Duck();
let bee: Bee = new Bee();
let cloud: Cloud = new Cloud(); */ 
//# sourceMappingURL=moveable.js.map