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

//any type

let car:any = "BMW";
console.log(car);
car = {name:"sirawich",numbers:23};
console.log(car)

//function types
function n():string{ //return string type
    return names;
}
console.log(n());

function voider():void{
    console.log('salamut');
    // return names;
}
console.log(voider());
//argrument type
function mul(val1:number,val2:number):number {
    return val1*val2;
}
console.log(mul(2,3));

let vv;
// let vv:(v:number,v2:number) => number;
vv = voider;
vv();
vv = mul;
console.log(vv(4,5));

//object type
let userData:{name:string,age:number} ={
    name: "ex",
    age:24
};
//complex object
let potter: {num:number[], plus: (state:boolean) => number[]} = {
    num: [2,4,5,6],
    plus: function(state:boolean):number[] {
        return this.num;
    }
}

console.log(potter.plus(true));

//copy type with type alias
type Complex = {num:string[], plus: (state:boolean) => string[]};

let potter2: Complex ={
    num: ["fucck","fucking"],
    plus: function(state:boolean):string[] {
        return this.num;
    }
};
console.log(potter2);
console.log({...potter2});

//union type
let real:number | string = 23;
real = "freedomm";
console.log(real);

//check type
real = "34"
if(typeof real == "string"){
    console.log("booo");
}
//never type
function neverReturn():never {
    throw new Error('ah Error');
} 

//nullable type
let canBeNull = 12;
canBeNull =null;
