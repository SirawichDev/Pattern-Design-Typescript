"use strict";
function hello(person) {
    console.log(person.firstname + ' ' + person.age);
}
var person = {
    firstname: "sirawich",
    age: 23,
    greet: function (name) {
        console.log("Hello ", this.firstname, name);
    }
};
hello(person);
person.greet("Ex");
//Class
var Miew = /** @class */ (function () {
    function Miew() {
        this.age = 20;
    }
    Miew.prototype.greet = function (name) {
        console.log(this.firstnames);
    };
    return Miew;
}());
function ttest(cat) {
    console.log(cat.firstnames);
}
var cat = new Miew();
cat.firstnames = "Sirawich";
ttest(cat); //เรียก hello
cat.greet("sry sry");
var myDoubleFunc;
myDoubleFunc = function (n1, n2) {
    return n1 + n2;
};
console.log(myDoubleFunc(20, 30));
