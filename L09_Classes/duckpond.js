"use strict";
var Ententeich;
(function (Ententeich) {
    class Vector {
        x = 0; // Initialisierung mit 0
        y = 0; // Initialisierung mit 0
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    let v1 = new Vector(10, -3);
    v1.set(3, 4); // Setzen von Werten vor dem Aufruf von scale
    v1.scale(2);
    console.log(v1);
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duckpond.js.map