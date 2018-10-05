//Ex1

var double = function(value){
    return value*2;
};

//Ex2
var greeting = function(name){
    if( name === undefined){
        name = "Ex";
    }
    console.log(name);
};
greeting();
greeting("LOL");

//Ex3
var numbers = [2,4,5,6,10];
console.log(Math.min.apply(Math,numbers));

//Ex4
var newArray = [55,23];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

//Ex5
var testResult =[43,5.3,21,23];
var res1 = testResult[0];
var res2 = testResult[1];
var res3 = testResult[2];
var res4 = testResult[3];
var res5 = testResult[4];
//Ex6
const sci = {fname: "siraw",lname:"voung"};
const x1 = sci.fname;
const x2 = sci.lname;
console.log(x1,x2);

