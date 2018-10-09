var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var Sentenses;
(function (Sentenses) {
    var Word;
    (function (Word) {
        function Charecter() {
            console.log("Hellow Cname");
        }
        Word.Charecter = Charecter;
    })(Word = Sentenses.Word || (Sentenses.Word = {}));
})(Sentenses || (Sentenses = {}));
///<reference path="calculateCircumference.ts"/>
///<reference path="calculateRectangle.ts"/>
///<reference path="morenamespace.ts"/>
var sentenses = Sentenses.Word;
var PI = 3;
console.log(MyMath.calculateCircumference(2));
console.log(MyMath.calculateRectangle(4, 5));
console.log(PI);
console.log(222);
sentenses.Charecter();
