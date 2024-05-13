"use strict";
var Ententeich;
(function (Ententeich) {
    class Tree {
        position = { x: 200, y: 422 };
        color = "brown";
        size;
        constructor() {
            console.log("Tree Constructor");
        }
        draw() {
            console.log("Tree draw");
            Ententeich.crc2.save();
            Ententeich.crc2.translate(390, 320);
            Ententeich.crc2.fillStyle = "brown";
            Ententeich.crc2.beginPath();
            Ententeich.crc2.moveTo(0, 0);
            Ententeich.crc2.lineTo(-60, 0);
            Ententeich.crc2.lineTo(-48, -20);
            Ententeich.crc2.lineTo(-45, -50);
            Ententeich.crc2.lineTo(-40, -100);
            Ententeich.crc2.lineTo(-90, -120);
            Ententeich.crc2.lineTo(-100, -130);
            Ententeich.crc2.lineTo(-90, -125);
            Ententeich.crc2.lineTo(-50, -120);
            Ententeich.crc2.lineTo(-60, -150);
            Ententeich.crc2.lineTo(-100, -170);
            Ententeich.crc2.lineTo(-140, -170);
            Ententeich.crc2.lineTo(-100, -180);
            Ententeich.crc2.lineTo(-140, -190);
            Ententeich.crc2.lineTo(-90, -185);
            Ententeich.crc2.lineTo(-55, -170);
            Ententeich.crc2.lineTo(-30, -140);
            Ententeich.crc2.lineTo(-30, -180);
            Ententeich.crc2.lineTo(-70, -200);
            Ententeich.crc2.lineTo(-90, -220);
            Ententeich.crc2.lineTo(-30, -190);
            Ententeich.crc2.lineTo(0, -230);
            Ententeich.crc2.lineTo(0, -200);
            Ententeich.crc2.lineTo(-5, -150);
            Ententeich.crc2.lineTo(0, -160);
            Ententeich.crc2.lineTo(0, -130);
            Ententeich.crc2.lineTo(-5, -100);
            Ententeich.crc2.fill();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Tree = Tree;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=tree.js.map