//Ex1
const double = (value:number) => value*2;
//Ex2
function greeting(name:string):void{
    if(name === undefined){
        name = "ex";
    }
    console.log(name);
}
// greeting();
greeting('xx');

//Ex3
const numbers:number[] = [23,4,34,42];
console.log(Math.min(...numbers));

//Ex4
const newArray = [55,23,12];
console.log(newArray.push(...numbers));

//Ex5
const testResult = [34,12,32,1,3];
const [e0,e1,e2,e3,e4] = testResult;
console.log(e0,e1,e2,e3,e4);
