//Simple Generic
function echo(data) {
    return data;
}
//Generic ช่วยบอก compiler ให้ว่า type นี้มี propertie หรือชนิดเป็นอะไรได้บา้ง
console.log(echo("Ex"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 23 }));
//better Generic ช่วยให้ ใช้ properties ของ parameter  type ได้ง่ายขึ้น
function Better(data) {
    return data;
}
console.log(Better("Ex").length); //Generic แสดง properties ที่มีให้เฉพาะ type ของ parameterเทานั้น
console.log(Better(27));
// console.log(Better<number>("27")); //error 
console.log(Better({ name: "Ex", age: 23 }));
//Buit-in Generics 
var testResult = [2, 4, 5]; //กำหนด ว่า typeอะไรบ้างที่สามารถอยู๋ได้ใน  ที่Array ควรจะคลุมไว้
testResult.push(3);
// testResult.push("343"); //error
console.log(testResult);
// Arrays
function print(arg) {
    arg.forEach(function (element) { return console.log(element); });
}
print(["tt", "tt"]);
function print(arg, x) {
    arg.forEach(function (element) { return console.log(element); });
    console.log(x);
}
print(["x", "y"], 2); //บอกว่า ค่าที่ส่งไปยังฟังค์ชันมีtypeอะไร
// print<number>(["x","y"],2); //error
// print<string>(["x","y"],2); //error
// print<number>(["x","y"]); //error
//Generic type
var miew = print;
console.log(miew([32, 23], 2));
//Generic Class
var MaMaSung = /** @class */ (function () {
    function MaMaSung() {
    }
    MaMaSung.prototype.calc = function () {
        return this.val1 * this.val2; //+ด้านหน้า หรือ บอก type <number> เพื่อแปลงเป็น number
    };
    return MaMaSung;
}());
;
var ss = new MaMaSung(); //บอกให้ instance initค่าหรือเปลี่ยนแปลงหรืออ่านได้เฉพาะ numberเท่านั้น
// const xx = new MaMaSung<boolean>(); //errorเพราะ เรากำหนดให้ class ใช้ ได้แค่ type number กับ string เทานั้น
ss.val1 = 3;
ss.val2 = 5;
console.log(ss.calc());
//More Generic class
var Complex = /** @class */ (function () {
    function Complex() {
    }
    Complex.prototype.show = function () {
        return this.val1 + this.val2;
    };
    return Complex;
}());
var sh = new Complex(); //บอกว่า Type ตัวแรก <t>เป็น number Type ตัวที่สอง U เป็น string <number>val1, <string>val2
sh.val1 = 2;
sh.val2 = "sd";
console.log(sh.show());
