"use strict";
var Ententeich;
(function (Ententeich) {
    class Duck extends Ententeich.Moveable {
        targetX = null;
        targetY = null;
        originX = this.x;
        originY = this.y;
        state = "idle";
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.arc(55, 10, 15, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
        move() {
            if (this.state === "movingToFood" && this.targetX !== null && this.targetY !== null) {
                let dx = this.targetX - this.x;
                let dy = this.targetY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let speed = 1;
                if (distance > 1) {
                    this.x += dx / distance * speed;
                    this.y += dy / distance * speed;
                }
                else {
                    this.state = "eating";
                    setTimeout(() => {
                        let foodIndex = Ententeich.foods.findIndex(food => food.x === this.targetX && food.y === this.targetY);
                        if (foodIndex !== -1) {
                            Ententeich.foods.splice(foodIndex, 1); // Remove the food once eaten
                        }
                        this.state = "returning";
                    }, 1000);
                }
            }
            else if (this.state === "returning") {
                let dx = this.originX - this.x;
                let dy = this.originY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let speed = 1;
                if (distance > 1) {
                    this.x += dx / distance * speed;
                    this.y += dy / distance * speed;
                }
                else {
                    this.state = "idle";
                }
            }
            else {
                super.move();
            }
        }
    }
    Ententeich.Duck = Duck;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duck.js.map