//namespace
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
//คนละ PI กับ ใน namespace Mymath
var PI = 3;
console.log(MyMath.calculateCircumference(2));
console.log(MyMath.calculateRectangle(4, 5));
console.log(PI);
