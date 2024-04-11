namespace Events{
window.addEventListener("load", handleLoad)
function handleLoad() {
    document.addEventListener("click", logInfo);
    document.getElementById("div0")?.addEventListener("click", logInfo);
    document.getElementById("div1")?.addEventListener("click", logInfo);
    document.getElementById("body")?.addEventListener("click", logInfo);
    document.addEventListener("mousemove", setInfoBox)
    document.addEventListener("keyup", logInfo);
    document.getElementById("div0")?.addEventListener("keyup", logInfo);
    document.getElementById("div1")?.addEventListener("keyup", logInfo);
    document.getElementById("body")?.addEventListener("keyup", logInfo);

    let button:HTMLElement = <HTMLElement>document.querySelector("button");
    button.addEventListener("click", customEvent);
}
function logInfo(_event: Event | KeyboardEvent): void {
    console.log(_event);
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);

}
function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.pageX
    let y: number = _event.pageY

    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

    span.style.left = x + 10 + "px"
    span.style.top = y + 10 + "px"

    span.innerHTML = "mouseposition: " + x + " " + y + "target" + _event.target;
}

function customEvent(_event: Event):void {
    let customEvent = new CustomEvent("Du hast mich geklickt");
    let button:HTMLElement = <HTMLElement>document.querySelector("button")
    button.dispatchEvent(customEvent)
    document.addEventListener("Du hast mich geklickt", <EventListener> klickFunction)
}

function klickFunction(_event:CustomEvent) {
    console.log(_event)
}
}
