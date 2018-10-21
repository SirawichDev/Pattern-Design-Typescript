//Decoraor
function test(counstructorFn:function) {
    console.log(counstructorFn);
}
@test
class Person{
    constructor(){
        console.log("miew");
    }
    
}

//Factory Decorator
function logging(value: boolean){
    return value ? test : null;
}
@logging(true)  //show constructor
class Car{

}
//advance
function printable(constructorFn: function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
}
@printable
class Plant{
    name = "Grenn Plant";
}
const plant = new Plant();
(<any>plant).print();