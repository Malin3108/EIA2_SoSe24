"use strict";
var Ententeich;
(function (Ententeich) {
    class Food {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.scale(0.5, 0.5);
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.arc(55, 10, 5, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
        assignClosestDuck() {
            let closestDuck = null;
            let closestDistance = Infinity;
            for (let moveable of Ententeich.moveables) {
                if (moveable instanceof Ententeich.Duck && moveable.state === "idle") {
                    let dx = moveable.x - this.x;
                    let dy = moveable.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < closestDistance) {
                        closestDuck = moveable;
                        closestDistance = distance;
                    }
                }
            }
            if (closestDuck) {
                closestDuck.state = "movingToFood";
                closestDuck.targetX = this.x;
                closestDuck.targetY = this.y;
            }
        }
    }
    Ententeich.Food = Food;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=food.js.map