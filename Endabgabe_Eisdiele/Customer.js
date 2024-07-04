"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Customer {
        x;
        y;
        color;
        mood;
        state = "waiting";
        targetPositionX;
        targetPositionY;
        constructor(_x, _y, _color, _mood) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.mood = "happy";
            this.state = "waiting";
        }
        draw() {
            Eisdiele.crc2.save();
            Eisdiele.crc2.translate(this.x, this.y);
            Eisdiele.crc2.scale(0.5, 0.5);
            // Draw the face
            Eisdiele.crc2.beginPath();
            Eisdiele.crc2.fillStyle = this.color;
            Eisdiele.crc2.arc(55, 10, 90, 0, 2 * Math.PI);
            Eisdiele.crc2.fill();
            Eisdiele.crc2.closePath();
            // Draw the left eye
            Eisdiele.crc2.beginPath();
            Eisdiele.crc2.fillStyle = 'black';
            Eisdiele.crc2.arc(30, -20, 10, 0, 2 * Math.PI);
            Eisdiele.crc2.fill();
            Eisdiele.crc2.closePath();
            // Draw the right eye
            Eisdiele.crc2.beginPath();
            Eisdiele.crc2.fillStyle = 'black';
            Eisdiele.crc2.arc(80, -20, 10, 0, 2 * Math.PI);
            Eisdiele.crc2.fill();
            Eisdiele.crc2.closePath();
            // Draw the mouth based on mood
            Eisdiele.crc2.beginPath();
            Eisdiele.crc2.strokeStyle = 'black';
            Eisdiele.crc2.lineWidth = 5;
            if (this.mood === "happy") {
                Eisdiele.crc2.arc(55, 20, 50, 0, Math.PI, false); // Happy mouth
            }
            else {
                Eisdiele.crc2.arc(55, 70, 50, 0, Math.PI, true); // Sad mouth
            }
            Eisdiele.crc2.stroke();
            Eisdiele.crc2.closePath();
            Eisdiele.crc2.restore();
        }
        changeMood() {
            this.mood = (this.mood === "happy") ? "sad" : "happy";
        }
        move() {
            if (this.state === "coming" && this.targetPositionX !== undefined && this.targetPositionY !== undefined) {
                let dx = this.targetPositionX - this.x;
                let dy = this.targetPositionY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 1) {
                    this.x += dx / distance * 3;
                    this.y += dy / distance * 3;
                }
                else {
                    this.state = "ordering";
                }
            }
            this.draw;
        }
    }
    Eisdiele.Customer = Customer;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Customer.js.map