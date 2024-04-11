"use strict";
var Events;
(function (Events) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("click", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
        document.getElementById("body")?.addEventListener("click", logInfo);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.getElementById("body")?.addEventListener("keyup", logInfo);
        let button = document.querySelector("button");
        button.addEventListener("click", customEvent);
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let span = document.querySelector("span");
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
        span.innerHTML = "mouseposition: " + x + " " + y + "target" + _event.target;
    }
    function customEvent(_event) {
        let customEvent = new CustomEvent("Du hast mich geklickt");
        let button = document.querySelector("button");
        button.dispatchEvent(customEvent);
        document.addEventListener("Du hast mich geklickt", klickFunction);
    }
    function klickFunction(_event) {
        console.log(_event);
    }
})(Events || (Events = {}));
//# sourceMappingURL=events.js.map