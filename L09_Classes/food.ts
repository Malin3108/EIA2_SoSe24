namespace Ententeich {
    export class Food {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;

        }

        draw(): void{
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);
            crc2.scale(0.5, 0.5);

            crc2.fillStyle = this.color;
            crc2.arc(55, 10, 5, 0, 2* Math.PI);
            crc2.fill();

            
            crc2.closePath();
            crc2.restore();
            
        }
        assignClosestDuck(): void {
            let closestDuck: Duck | null = null;
            let closestDistance: number = Infinity;

            for (let moveable of moveables) {
                if (moveable instanceof Duck && moveable.state === "idle") {
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
}