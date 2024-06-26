namespace Ententeich {
    export class Bee extends Moveable{
        

        constructor(_x: number, _y: number, _color: string) {
            super(_x,_y,_color)
        }
        move() {
            this.x += 1
            this.y -= 1
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = this.color;
            crc2.ellipse(35, 35, 10, 5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }

}