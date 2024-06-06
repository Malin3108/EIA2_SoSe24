namespace Ententeich {
    export class Cloud extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color)
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y)

            crc2.beginPath();
            crc2.moveTo(150, 0);
            crc2.lineTo(0, 0);
            crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            crc2.closePath();

            let cloudColor: string = this.color;
            crc2.fillStyle = cloudColor;
            crc2.fill();

            crc2.restore();
        }
    }
}

