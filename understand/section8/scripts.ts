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

//Mehod Decorator
function editable(value:boolean){
    return function(target:any,propName:string,descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}
class Project { 
    projectName: string;
    constructor(name:string){
        this.projectName = name;
    }
    @editable(false)
    calcBudget(){
        console.log(1000);
    }
}
const project = new Project("Exy");
project.calcBudget();
project.calcBudget = function(){
    console.log(2000);
}
project.calcBudget();