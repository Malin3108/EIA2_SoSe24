namespace Eisdiele {
    

    export class Customer {
        public x: number;
        public y: number;
        public color: string;
        public mood: "happy" | "sad";
        public state: "waiting" | "coming" | "ordering" | "leaving" = "waiting";
        public targetPositionX?: number;
        public targetPositionY?: number;




        constructor(_x: number, _y: number, _color: string, _mood: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color
            this.mood = "happy";
            this.state = "waiting"


        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.scale(0.5, 0.5);

            // Draw the face
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(55, 10, 90, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Draw the left eye
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.arc(30, -20, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Draw the right eye
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.arc(80, -20, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Draw the mouth based on mood
            crc2.beginPath();
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 5;
            if (this.mood === "happy") {
                crc2.arc(55, 20, 50, 0, Math.PI, false); // Happy mouth
            } else {
                crc2.arc(55, 70, 50, 0, Math.PI, true); // Sad mouth
            }
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
        changeMood(): void {
            this.mood = (this.mood === "happy") ? "sad" : "happy";

        }

        move(): void {
            if (this.state === "coming" && this.targetPositionX !== undefined && this.targetPositionY !== undefined) {
                let dx = this.targetPositionX - this.x;
                let dy = this.targetPositionY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 1) {
                    this.x += dx / distance * 3;
                    this.y += dy / distance * 3;
                } else {
                    this.state = "ordering";
                }
            }

        this.draw
        }

    }

}