"use strict";
var Ententeich;
(function (Ententeich) {
    class Grass {
        position;
        color;
        size;
        constructor() {
            console.log("Grass Constructor");
        }
        draw() {
            console.log("Grass draw");
        }
    }
    Ententeich.Grass = Grass;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=grass.js.map