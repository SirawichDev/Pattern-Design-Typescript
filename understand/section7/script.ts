//Simple Generic
function echo(data:any){
    return data;
}
//Generic ช่วยบอก compiler ให้ว่า type นี้มี propertie หรือชนิดเป็นอะไรได้บา้ง

console.log(echo("Ex"));
console.log(echo(27));
console.log(echo({name: "Max", age: 23}));

//better Generic ช่วยให้ ใช้ properties ของ parameter  type ได้ง่ายขึ้น
function Better<T>(data : T){ //T คือ type ของ parameter นั้น 
    return data;
}
console.log(Better("Ex").length); //Generic แสดง properties ที่มีให้เฉพาะ type ของ parameterเทานั้น
console.log(Better(27));
// console.log(Better<number>("27")); //error 
console.log(Better({name: "Ex", age: 23}));

//Buit-in Generics 
const testResult:Array<number> = [2,4,5]; //กำหนด ว่า typeอะไรบ้างที่สามารถอยู๋ได้ใน  ที่Array ควรจะคลุมไว้
testResult.push(3);
// testResult.push("343"); //error
console.log(testResult);

// Arrays
function print<T>(arg: T[]){ //parameter ที่ส่งมาจะมีtypeอะไรก็ได้แต่ต้องมีarray คลุ่มไว้
    arg.forEach((element) => console.log(element));
}
print<string>(["tt","tt"]);
function print<T>(arg: T[],x: T){ //parameter ที่ส่งมาจะมีtypeอะไรก็ได้แต่ต้องมีarray คลุ่มไว้
    arg.forEach((element) => console.log(element));
    console.log(x);
}
print<number|string>(["x","y"],2); //บอกว่า ค่าที่ส่งไปยังฟังค์ชันมีtypeอะไร
// print<number>(["x","y"],2); //error
// print<string>(["x","y"],2); //error
// print<number>(["x","y"]); //error

//Generic type
const miew: <T>(data:T[],number:number) => T= print;
console.log(miew<number>([32,23],2));

//Generic Class
class MaMaSung<T extends number | string>{
    val1: T;
    val2: T;
    calc(){
        return <number>this.val1 * <number>this.val2; //+ด้านหน้า หรือ บอก type <number> เพื่อแปลงเป็น number
    }
};
const ss = new MaMaSung<number|string>(); //บอกให้ instance initค่าหรือเปลี่ยนแปลงหรืออ่านได้เฉพาะ numberเท่านั้น
ss.val1=3;
ss.val2 =5;
console.log(ss.calc());