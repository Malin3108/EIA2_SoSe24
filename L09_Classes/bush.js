"use strict";
var Ententeich;
(function (Ententeich) {
    class Bush {
        position;
        color;
        size;
        constructor() {
            console.log("Bush Constructor");
        }
        draw() {
            console.log("Bush draw");
        }
    }
    Ententeich.Bush = Bush;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bush.js.map