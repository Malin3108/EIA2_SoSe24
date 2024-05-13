namespace Ententeich {


    window.addEventListener("load", handleLoad)
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawHills();
        drawCloud();
        drawNewCloud();
        drawHut();
        drawTree();
        drawPond();
        drawBush();
        drawNewBush();

    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }
    function drawHills(): void {
        console.log("Mountain");

        let color: string = "darkgreen";

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 280);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -50);
        crc2.lineTo(300, -90);
        crc2.lineTo(190, -50);
        crc2.lineTo(130, -80);
        crc2.lineTo(70, -70);
        crc2.lineTo(0, -55);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 290);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -60);
        crc2.lineTo(330, -40);
        crc2.lineTo(240, -35);
        crc2.lineTo(170, -45);
        crc2.lineTo(100, -55);
        crc2.lineTo(50, -50);
        crc2.lineTo(0, -40);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }

    export function pseudoRandom(seed: number): () => number {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    function drawHut(): void {
        console.log("House")

        crc2.save();
        crc2.beginPath();
        crc2.translate(20, 380);
        crc2.fillStyle = "beige";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(50, 0);
        crc2.lineTo(50, -50);
        crc2.lineTo(0, -50);
        crc2.lineTo(0, 0);
        crc2.moveTo(0, -50);
        crc2.lineTo(20, -75);
        crc2.lineTo(70, -75);
        crc2.lineTo(50, -50);
        crc2.moveTo(50, -50);
        crc2.lineTo(80, -60);
        crc2.lineTo(70, -75);
        crc2.moveTo(80, -60);
        crc2.lineTo(80, -20);
        crc2.lineTo(50, 0);
        crc2.lineTo(50, -50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(82, 372);
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.moveTo(0, 0);
        crc2.lineTo(10, -6);
        crc2.lineTo(10, -40);
        crc2.lineTo(0, -35);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
    function drawTree(): void {
        console.log("Tree draw");

        crc2.save();
        crc2.translate(390, 320);
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(10, 40);
        crc2.lineTo(-70, 30);
        crc2.lineTo(-48, -20);
        crc2.lineTo(-45, -30);
        crc2.lineTo(-40, -100);
        crc2.lineTo(-200, -120);
        crc2.lineTo(-100, -120);
        crc2.lineTo(-100, -170);
        crc2.lineTo(-60, -110);
        crc2.lineTo(-50, -150);
        crc2.lineTo(-100, -170);
        crc2.lineTo(-140, -170);
        crc2.lineTo(-100, -180);
        crc2.lineTo(-140, -190);
        crc2.lineTo(-100, -185);
        crc2.lineTo(-65, -170);
        crc2.lineTo(-20, -140);
        crc2.lineTo(-20, -150);
        crc2.lineTo(-150, -250);
        crc2.lineTo(-90, -220);
        crc2.lineTo(-30, -190);
        crc2.lineTo(0, -230);
        crc2.lineTo(0, -200);
        crc2.lineTo(-5, -150);
        crc2.lineTo(0, -160);
        crc2.lineTo(0, -130);
        crc2.lineTo(-5, -100);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(): void {
        console.log("Forrest");

        let numberOfParticles: number = 90; 
        let cloudWidth: number = 170; 
        let cloudHeight: number = 50; 
        let xPosition: number = 120; 
        let yPosition: number = 90; 
        let random = pseudoRandom(42)

        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles)); 
            let y = yPosition + (random() * cloudHeight); 
            drawCloudParticle(x, y); 
        }
    }
    function drawNewCloud(): void {
        console.log("Forrest");

        let numberOfParticles: number = 30; 
        let cloudWidth: number = 100; 
        let cloudHeight: number = 20; 
        let xPosition: number = 0; 
        let yPosition: number = 160; 
        let random = pseudoRandom(42)

        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles)); 
            let y = yPosition + (random() * cloudHeight); 
            drawCloudParticle(x, y); 
        }
    }
    function drawCloudParticle(x: number, y: number): void {
        let gradient = crc2.createRadialGradient(x, y, 0, x, y, 15);

        
        gradient.addColorStop(0, "white"); 
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); 

        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 15, 0, Math.PI * 2); 
        crc2.fillStyle = gradient; 
        crc2.fill();
        crc2.restore();
    }
    function drawPond(): void {

        let centerX = 220; 
        let centerY = 490; 
        let radiusX = 290;
        let radiusY = 120;

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.restore();
    }
    function drawBush(): void {
        

        let numberOfParticles: number = 50; 
        let cloudWidth: number = 80; 
        let cloudHeight: number = 70; 
        let xPosition: number = 310; 
        let yPosition: number = 590; 
        let random = pseudoRandom(42)

        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles)); 
            let y = yPosition + (random() * cloudHeight); 
            drawBushParticle(x, y); 
        }
    }
    function drawNewBush(): void {
        console.log("Forrest");

        let numberOfParticles: number = 80; 
        let cloudWidth: number = 100; 
        let cloudHeight: number = 70; 
        let xPosition: number = 0; 
        let yPosition: number = 560; 
        let random = pseudoRandom(42)

        for (let i = 0; i < numberOfParticles; i++) {
            let x = xPosition + (i * (cloudWidth / numberOfParticles)); 
            let y = yPosition + (random() * cloudHeight); 
            drawBushParticle(x, y); 
        }
    }

    function drawBushParticle(x: number, y: number): void {

        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 15, 0, Math.PI * 2); 
        crc2.fillStyle = "#006400";
        crc2.fill();
        crc2.restore();
    }
}