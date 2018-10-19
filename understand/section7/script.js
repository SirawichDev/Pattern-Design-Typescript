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
