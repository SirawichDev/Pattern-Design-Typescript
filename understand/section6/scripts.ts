interface NamePerson {
    firstname: string;
    age?: number; //not fix it fine if doesn't have age pass to interface
    [unknow : string]: any; // not array ใช้ต่อเมื่อไม่ทราบชื่อ properties ที่ส่งมา เจ้านี้จะเป็น properties นั้นให้ <ปกติ ชื่อ prop ต้องตรงกันกับ interface>
    greet(name:string):void; //method
}
function hello(person:NamePerson){
    console.log(person.firstname + ' ' + person.age);
}
const person = {
    firstname:"sirawich",
    age:23,
    greet(name:string){
        console.log("Hello " , this.firstname, name);
    }
};
hello(person);
person.greet("Ex");
interface Test {
    firstnames:string;
    age?: number;
}
//Class
class Miew implements Test{
    firstnames:string;
    age:number = 20;
    greet(name:string){
        console.log(this.firstnames);
    }
}
function ttest(cat:Test){
    console.log(cat.firstnames)
}
let cat = new Miew();
cat.firstnames = "Sirawich";
ttest(cat); //เรียก hello
cat.greet("sry sry");

//function type
interface DoubleValueFunc {
    (number1:number,number2:number):number; //function
}

let myDoubleFunc: DoubleValueFunc;
myDoubleFunc= function (n1:number,n2:number) {
    return n1+n2;
};
console.log(myDoubleFunc(20,30));

//Interface inheritance
interface Name extends NamePerson{
    age:number;
}
const union:Name = { //inherite prop ของทั้ง Name และ NamePerson
    age:20,
    firstname:"sirawich",
    greet(n:string){
        console.log(n);
    }
};

union.greet("Hi");