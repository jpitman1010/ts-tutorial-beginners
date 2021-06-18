var AClassName = /** @class */ (function () {
    function AClassName(someWord, aMadeUpNumber, aMadeUpNumberArray, aMadeUpStringArray) {
        this.somethingPrivate = someWord.word + ' ' + someWord.number + ' ' + someWord.numArray + ' ' + someWord.strArray;
    }
    AClassName.prototype.getAClassName = function () {
        return this.somethingPrivate;
    };
    return AClassName;
}());
function foo(bar) {
    return "Hello, " + bar.word + ' ' + bar.number + ' ' + bar.numArray + ' ' + bar.strArray;
}
var baz = { word: "abc", number: 123, numArray: [1, 2, 3], strArray: ['1', '2', '3'] };
var fred = new AClassName(baz, 1, [2, 3, 4], ['5', '6', '7']);
console.log(fred.getAClassName());
document.body.innerHTML = fred.getAClassName();
