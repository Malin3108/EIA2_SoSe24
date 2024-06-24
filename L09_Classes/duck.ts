namespace Ententeich {
    export class Duck extends Moveable {
        targetX: number | null = null;
        targetY: number | null = null;
        originX: number = this.x
        originY: number = this.y
        state: "idle" | "movingToFood" | "eating" | "returning" = "idle";


        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color)

        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = this.color;
            crc2.arc(55, 10, 15, 0, 2 * Math.PI);
            crc2.fill();

            crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }


       
        move(): void {
            if (this.state === "movingToFood" && this.targetX !== null && this.targetY !== null) {
                let dx = this.targetX - this.x;
                let dy = this.targetY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let speed = 1;

                if (distance > 1) {
                    this.x += dx / distance * speed;
                    this.y += dy / distance * speed;
                } else {
                    this.state = "eating";
                    setTimeout(() => {
                        let foodIndex = foods.findIndex(food => food.x === this.targetX && food.y === this.targetY);
                        if (foodIndex !== -1) {
                            foods.splice(foodIndex, 1); // Remove the food once eaten
                        }
                        this.state = "returning";
                    }, 1000);
                }
            } else if (this.state === "returning") {
                let dx = this.originX - this.x;
                let dy = this.originY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let speed = 1;

                if (distance > 1) {
                    this.x += dx / distance * speed;
                    this.y += dy / distance * speed;
                } else {
                    this.state = "idle";
                }
            } else {
                super.move();
            }
        }
    }
}