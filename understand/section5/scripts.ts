//namespace
namespace MyMath{
    const PI = 3.14;
    export function calculateCircumference(diameter:number){
        return diameter*PI;
    }
    export function calculateRectangle(width:number,length:number){
        return width*length;
    }
}
//คนละ PI กับ ใน namespace Mymath
const PI = 3;
console.log(MyMath.calculateCircumference(2));
console.log(MyMath.calculateRectangle(4,5));
console.log(PI);