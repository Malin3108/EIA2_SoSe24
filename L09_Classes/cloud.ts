namespace Ententeich {
    export class Cloud{
        position: Vector;
        color: string;
        size: Vector;
    
        constructor (){
            console.log("Cloud Constructor")
        }
    
        move ():void{
            console.log("Cloud move")
        }
    
        draw():void{
            console.log("Cloud draw")
            let numberOfParticles: number = 50; 
            let cloudWidth: number = 120; 
            let cloudHeight: number = 40; 
            let xPosition: number = 40; 
            let yPosition: number = 50; 
            let random = pseudoRandom(42)
        
            for (let i = 0; i < numberOfParticles; i++) {
                let x = xPosition + (i * (cloudWidth / numberOfParticles)); 
                let y = yPosition + (random() * cloudHeight); 
                this.drawCloudParticle(x, y); 
            }
        }

        drawCloudParticle(x: number, y: number): void {
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


    
        }
}