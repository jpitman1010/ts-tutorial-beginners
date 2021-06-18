
class AClassName {
    private somethingPrivate: string

    constructor(someWord: Someword, aMadeUpNumber: number, aMadeUpNumberArray: number[], aMadeUpStringArray: string[]){ 
        this.somethingPrivate = someWord.word + ' ' + someWord.number + ' ' + someWord.numArray + ' ' + someWord.strArray;
    }

    public getAClassName(){
        return this.somethingPrivate
    }
}

interface Someword {
    word: string;
    number: number;
    numArray: number[];
    strArray: string[];
}

function foo(bar: Someword) {
    return "Hello, " + bar.word + ' ' + bar.number + ' ' + bar.numArray + ' ' + bar.strArray;
}

let baz = { word: "abc", number: 123, numArray: [1, 2, 3], strArray: ['1', '2', '3'] }
let fred: AClassName = new AClassName(baz, 1, [2, 3, 4], ['5', '6', '7'])

console.log(fred.getAClassName());

document.body.innerHTML = fred.getAClassName();