namespace Ententeich {
    window.addEventListener("load", handleLoad)

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200, "white");
            moveables.push(cloud);
        }
        

        drawBackground();
        setInterval(animate, 40);

        let duck: Duck = new Duck(10, 405, "yellow");
        duck.draw();
        moveables.push(duck);

        let duck2: Duck = new Duck(100, 440, "orange");
        duck.draw();
        moveables.push(duck2);

        let bee: Bee = new Bee(10, 600, "yellow");
        bee.draw();
        moveables.push(bee);

        let bee2: Bee = new Bee(0, 500, "yellow");
        bee.draw();
        moveables.push(bee2);
    }

    function animate(): void {
        drawBackground();
        for (let i: number = 0; i < moveables.length; i++) {
            moveables[i].move();
            moveables[i].draw();
              
        }
        drawTree();
    }

    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        drawHills();
        drawPond();
        drawBush();

    }
    function drawHills(): void {

        let color: string = "darkgrey";

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
    function drawTree(): void {
        let treepositions: number[][] = [[320, 370], [280, 360], [50, 340], [20, 350]]
        for (let i: number = 0; i < treepositions.length; i++) {

            crc2.save();
            crc2.translate(treepositions[i][0],treepositions[i][1]);


            crc2.fillStyle = "brown";
            crc2.fillRect(-10, 0, 20, -60);


            crc2.fillStyle = "darkgreen";
            for (let i = 0; i < 3; i++) {
                crc2.beginPath();
                crc2.arc(0, -60 - (i * 30), 40, 0, Math.PI * 2);
                crc2.fill();
            }

            crc2.restore();

        }

    }
    function drawBush(): void {
    let numberOfParticles: number = 50;
    let bushWidth: number = 80;
    let bushHeight: number = 70;
    let xPosition: number = 310;
    let yPosition: number = 590;
    let random = pseudoRandom(42);

    for (let i = 0; i < numberOfParticles; i++) {
        let x = xPosition + (i * (bushWidth / numberOfParticles));
        let y = yPosition + (random() * bushHeight);
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

