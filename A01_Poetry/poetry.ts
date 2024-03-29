namespace aufgabe1 {
    let subject: string[] = ["Pferde", "Affen", "Bären", "Katzen", "Hasen", "Hunde"];
    let predicate: string[] = ["essen", "lieben", "hassen", "ignorieren", "bekämpfen", "verehren"];
    let object: string[] = ["Würmer", "Bananen", "Pflanzen", "Menschen", "Mäuse", "Bälle"];


    for (let i: number = subject.length; i >= 1; i--) {
        let poem: string = getverse(subject, predicate, object)
        console.log(poem)
    }
    function getverse(_subject: string[], _predicate: string[], _object: string[]) {
        let verse: string = "";

        let subjIndex: number = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(subjIndex, 1)[0] + " ";

        let predIndex: number = Math.floor(Math.random() * _predicate.length);21
        verse += _predicate.splice(predIndex, 1)[0] + " ";

        let objIndex: number = Math.floor(Math.random() * _object.length);
        verse += _object.splice(objIndex, 1)[0] + ".";

        return verse
    }
}