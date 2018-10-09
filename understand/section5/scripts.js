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
///<reference path="calculateCircumference.ts"/>
///<reference path="calculateRectangle.ts"/>
var PI = 3;
console.log(MyMath.calculateCircumference(2));
console.log(MyMath.calculateRectangle(4, 5));
console.log(PI);
console.log(222);
