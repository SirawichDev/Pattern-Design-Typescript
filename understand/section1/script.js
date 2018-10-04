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
console.log("miew miew");
var names = 'Ex';
console.log(names);
var u = ["kongky", "jojo"];
u = [100];
console.log(u);
//tuple สำหรับ format ที่มีค่าแน่นอน
var arr = ["item1", 20];
//type enum
var Color;
(function (Color) {
    Color[Color["red"] = 199] = "red";
    Color[Color["green"] = 200] = "green";
    Color[Color["blue"] = 30] = "blue"; //number 2
})(Color || (Color = {}));
var myColor = Color.blue;
console.log(myColor);
//any type
var car = "BMW";
console.log(car);
car = { name: "sirawich", numbers: 23 };
console.log(car);
//function types
function n() {
    return names;
}
console.log(n());
function voider() {
    console.log('salamut');
    // return names;
}
console.log(voider());
//argrument type
function mul(val1, val2) {
    return val1 * val2;
}
console.log(mul(2, 3));
var vv;
// let vv:(v:number,v2:number) => number;
vv = voider;
vv();
vv = mul;
console.log(vv(4, 5));
//object type
var userData = {
    name: "ex",
    age: 24
};
//complex object
var potter = {
    num: [2, 4, 5, 6],
    plus: function (state) {
        return this.num;
    }
};
console.log(potter.plus(true));
var potter2 = {
    num: ["fucck", "fucking"],
    plus: function (state) {
        return this.num;
    }
};
console.log(potter2);
console.log(__assign({}, potter2));
//union type
var real = 23;
real = "freedomm";
console.log(real);
//check type
real = "34";
if (typeof real == "string") {
    console.log("booo");
}
//never type
function neverReturn() {
    throw new Error('ah Error');
}
//nullable type
var canBeNull = 12;
canBeNull = null;
