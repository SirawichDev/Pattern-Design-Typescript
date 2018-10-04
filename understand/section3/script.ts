 //block scope
let vars = "number";
function reset(){
    let vars =2;
    console.log(vars);
}
reset();
console.log(vars);

//arrow function
const addNumber= function(number1:number,number2:number):number{
    return number1+number2;
}

console.log(addNumber(4,5));
const multi = (number1:number,number2:number) =>{
    return number1*number2;
} 

console.log(multi(3,4));

const greet = friend => console.log(friend);

greet('33');

//default parameter
const countdown = (start:number=20): void => {
    while(start > 0){
        start--;
    }
    console.log("Done!",start);
};
countdown();

//Rest and spread
const number = [4,5,32,1];
console.log(Math.max(32,3,4,55,6)); //list
console.log(Math.max(...number)); //spread array to single value
//Rest
function makeArray(...args:number[]){ //combine all args
    return args;
}

console.log(makeArray(2,4,5));

//Destructuring
const myHobbies = ["Cooking","Sport"];
const [hobby1,hobby2] = myHobbies //ด้านขวามให้เป้น array ที่ต้องการdestructure จะเป็น hobby1 ที่ myHubbies[0] hobby2 ที่ myHobbies[1]
console.log(hobby1,hobby2);

const obj:{names:string,surname:string} = {
    names:"sirawic",
    surname: "ovungchuy"
};
const {names,surname}= obj;  //ใน object ลำดับไม่สำคัญแต่ตัวแปร(key)สำคัญ ใน array ตัวแปรไม่สำคัญแต่ ลำดับสำคัญ 
console.log(names,surname);
//rename destruct obj
const {names:x1,surname:x2} = obj; //: ไม่ได้หมายความว่าชนิดแต่เป็นตัวแปรใหม่ Es2017
console.log(x1,x2);

