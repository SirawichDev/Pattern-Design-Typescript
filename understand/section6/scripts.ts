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
    none: 23,
    greet(name:string){
        console.log("Hello " , this.firstname, name);
    }
};
hello(person);
person.greet("Ex");

