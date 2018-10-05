var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//block scope
var vars = "number";
function reset() {
    var vars = 2;
    console.log(vars);
}
reset();
console.log(vars);
//arrow function
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(4, 5));
var multi = function (number1, number2) {
    return number1 * number2;
};
console.log(multi(3, 4));
var greet = function (friend) { return console.log(friend); };
greet('33');
//default parameter
var countdown = function (start) {
    if (start === void 0) { start = 20; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
//Rest and spread
var number = [4, 5, 32, 1];
console.log(Math.max(32, 3, 4, 55, 6)); //list
var ob = {
    x: 2,
    y: 4
};
console.log(__assign({}, ob));
console.log(Math.max.apply(Math, number)); //spread array to single value
//Rest
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(2, 4, 5));
//Destructuring
var myHobbies = ["Cooking", "Sport"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; //ด้านขวามให้เป้น array ที่ต้องการdestructure จะเป็น hobby1 ที่ myHubbies[0] hobby2 ที่ myHobbies[1]
console.log(hobby1, hobby2);
var obj = {
    names: "sirawic",
    surname: "ovungchuy"
};
var names = obj.names, surname = obj.surname; //ใน object ลำดับไม่สำคัญแต่ตัวแปร(key)สำคัญ ใน array ตัวแปรไม่สำคัญแต่ ลำดับสำคัญ 
console.log(names, surname);
//rename destruct obj
var x1 = obj.names, x2 = obj.surname; //: ไม่ได้หมายความว่าชนิดแต่เป็นตัวแปรใหม่ Es2017
console.log(x1, x2);
//Template iteral
var username = "ex";
var show_uname = "Hello " + username + " Miew miew ";
console.log(show_uname);
