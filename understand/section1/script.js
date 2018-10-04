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
