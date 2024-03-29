"use strict";
var aufgabe1;
(function (aufgabe1) {
    let subject = ["Pferde", "Affen", "Bären", "Katzen", "Hasen", "Hunde"];
    let predicate = ["essen", "lieben", "hassen", "ignorieren", "bekämpfen", "verehren"];
    let object = ["Würmer", "Bananen", "Pflanzen", "Menschen", "Mäuse", "Bälle"];
    for (let i = subject.length; i >= 1; i--) {
        let poem = getverse(subject, predicate, object);
        console.log(poem);
    }
    function getverse(_subject, _predicate, _object) {
        let verse = "";
        let subjIndex = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(subjIndex, 1)[0] + " ";
        let predIndex = Math.floor(Math.random() * _predicate.length);
        21;
        verse += _predicate.splice(predIndex, 1)[0] + " ";
        let objIndex = Math.floor(Math.random() * _object.length);
        verse += _object.splice(objIndex, 1)[0] + ".";
        return verse;
    }
})(aufgabe1 || (aufgabe1 = {}));
//# sourceMappingURL=poetry.js.map