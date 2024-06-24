namespace Ententeich {
    export class Babyduck extends Duck {
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.fillStyle = this.color;

            crc2.beginPath();
            crc2.arc(35, 5, 10, 0, 2 * Math.PI);
            crc2.fill();

            crc2.ellipse(25, 20, 25, 12.5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}

