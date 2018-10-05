//Ex1
var double = function (value) { return value * 2; };
//Ex2
function greeting(name) {
    if (name === undefined) {
        name = "ex";
    }
    console.log(name);
}
// greeting();
greeting('xx');
//Ex3
var numbers = [23, 4, 34, 42];
console.log(Math.min.apply(Math, numbers));
//Ex4
var newArray = [55, 23, 12];
console.log(newArray.push.apply(newArray, numbers));
//Ex5
var testResult = [34, 12, 32, 1, 3];
var e0 = testResult[0], e1 = testResult[1], e2 = testResult[2], e3 = testResult[3], e4 = testResult[4];
console.log(e0, e1, e2, e3, e4);
