namespace Ententeich {
    export class Duck extends Moveable{
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x,_y,_color)
        }

        draw(): void{
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = this.color;
            crc2.arc(55, 10, 15, 0, 2* Math.PI);
            crc2.fill();

            crc2.ellipse(35, 35, 40, 20, 0, 0, 2* Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            
        }
    }

}