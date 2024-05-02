"use strict";
var generativeKunst;
(function (generativeKunst) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        let strokeColor;
        let fillColor;
        drawBackground();
        for (let i = 0; i < 20; i++) {
            for (let z = 0; z < 5; z++) {
                let x = Math.random() * 400;
                let y = (i + 10) * z;
                let size = Math.random() * 50 + 10;
                let width = Math.random() * 25 + 5;
                let height = Math.random() * 25 + 5;
                switch (i) {
                    case 0:
                        strokeColor = "white";
                        break;
                    case 1:
                        strokeColor = "grey";
                        break;
                    case 2:
                        strokeColor = "white";
                        break;
                    case 3:
                        strokeColor = "blue";
                        break;
                    default:
                        strokeColor = "lightblue";
                }
                switch (z) {
                    case 0:
                        fillColor = "blue";
                        break;
                    case 1:
                        fillColor = "white";
                        break;
                    case 2:
                        fillColor = "darkgrey";
                        break;
                    default:
                        fillColor = "blue";
                }
                drawRectangle(x, y, width, height, strokeColor, fillColor);
                drawCircles({ x: x, y: y }, size, "red");
                drawCircles({ x: x, y: y }, size, "green");
                drawCircles({ x: x, y: y }, size, "blue");
            }
        }
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.4, "lightblue");
        gradient.addColorStop(1, "darkblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    function drawRectangle(_x, _y, _width, _height, _strokeColor, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.strokeRect(_x, _y, _width, _height);
        crc2.fillRect(_x, _y, _width, _height);
    }
    function drawCircles(_position, _size, _color) {
        let circles = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, _size / 2);
        circles.arc(0, 0, _size / 2, 0, 2 * Math.PI);
        gradient.addColorStop(0, _color);
        gradient.addColorStop(1, "transparent");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.fill(circles);
        crc2.restore();
    }
})(generativeKunst || (generativeKunst = {}));
//# sourceMappingURL=kunst.js.map