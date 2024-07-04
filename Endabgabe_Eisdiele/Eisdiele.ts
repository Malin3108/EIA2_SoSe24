namespace Eisdiele {
    window.addEventListener("load", handleLoad)
    window.addEventListener("keydown", changeMood)
    window.addEventListener("click", tableClicked);
    

    export let crc2: CanvasRenderingContext2D;
    export let customers: Customer[] = [];
    export let customerRadius = 90 * 0.5;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        let customer: Customer = new Customer(100, 600, "yellow", "happy");
        customers.push(customer);

        setInterval(createCustomer, 10000);

        animate();
    }




    function changeMood(_event: KeyboardEvent): void {
        if (_event.code === "Space") {
            for (let customer of customers) {
                customer.changeMood();
            }
        }
    }

    function createCustomer(): void {
        // Define the range for random positions
        let minX = 10;
        let maxX = 600;
        let minY = 400;
        let maxY = 850;

        let x: number;
        let y: number;
        let validPosition = false;

        // Keep generating positions until a valid one is found
        while (!validPosition) {
            x = Math.random() * (maxX - minX) + minX;
            y = Math.random() * (maxY - minY) + minY;

            validPosition = true;
            for (let customer of customers) {
                const distance = Math.sqrt((x - customer.x) ** 2 + (y - customer.y) ** 2);
                if (distance < customerRadius * 2) {
                    validPosition = false;
                    break;
                }
            }
        }

        let color = "yellow"; // You can change this to randomize colors if needed
        let customer: Customer = new Customer(x, y, color, "happy");
        customers.push(customer);
    }

    function animate(): void {
        drawBackground();
        for (let i: number = 0; i < customers.length; i++) {
            customers[i].move();
            customers[i].draw();
        }
        requestAnimationFrame(animate);

    }

    function drawBackground(): void {

        crc2.fillStyle = "beige"
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawCounter();
        drawTable();
        drawStool();
    }

    function drawCounter(): void {
        let counter: Counter = new Counter(800, 500, "brown");
        counter.draw();


    }

    function drawTable(): void {
        let table: Table = new Table(1200, 200, "brown");
        table.draw();

        let table2: Table = new Table(200, 200, "brown");
        table2.draw();

        let table3: Table = new Table(700, 200, "brown");
        table3.draw();
    }

    function drawStool(): void {
        let stool: Stool = new Stool(1100, 240, "brown");
        stool.draw();

        let stool2: Stool = new Stool(100, 240, "brown");
        stool2.draw();

        let stool3: Stool = new Stool(600, 240, "brown");
        stool3.draw();

        let stool4: Stool = new Stool(1450, 240, "brown");
        stool4.draw();

        let stool5: Stool = new Stool(450, 240, "brown");
        stool5.draw();

        let stool6: Stool = new Stool(950, 240, "brown");
        stool6.draw();
    }
    // Table is Clicked
   
    function tableClicked(event: PointerEvent): void {
        let clickX = event.clientX;
        let clickY = event.clientY;

        let tables = [new Table(1200, 200, "brown"), new Table(200, 200, "brown"), new Table(700, 200, "brown")];

        for (let table of tables) {
            if (table.state === "free") {
                if (clickX >= table.x && clickX <= table.x + 200 && clickY >= table.y && clickY <= table.y + 100) {
                    for (let customer of customers) {
                        if (customer.state === "waiting") {
                            customer.state = "coming";
                            customer.targetPositionX = table.x;
                            customer.targetPositionY = table.y;
                            table.state = "occupied";
                            break;
                        }
                    }
                }
            }
        }
    }
}




