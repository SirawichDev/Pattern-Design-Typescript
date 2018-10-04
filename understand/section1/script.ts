console.log("miew miew");
let names:string = 'Ex';

console.log(names);

let u: any[] = ["kongky","jojo"];
u = [100];
console.log(u);

//tuple สำหรับ format ที่มีค่าแน่นอน
let arr:[string,number]= ["item1", 20];

 //type enum
enum Color{
    red =199, //number 0
    green = 200, //number 1
    blue =30//number 2
}
let myColor: Color = Color.blue;
console.log(myColor);