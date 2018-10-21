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

//Method Decorator
function editable(value:boolean){
    return function(target:any,propName:string,descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}
function overwritable(value:boolean){
    return function( target:any, propName:string):any { //target = constructtor function ,static
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}
class Project { 
    @overwritable(true) //uneditaable = false
    projectName: string;
    constructor(name:string){
        this.projectName = name;
    }
    @editable(false) //Method Decorator
    calcBudget(){
        console.log(1000);
    }
}
const project = new Project("Exy");
project.calcBudget();
// project.calcBudget = function(){
//     console.log(2000);
// }
project.calcBudget();
console.log(project.projectName);


//Parameter decorator
function printInfo(target:any, methodName:string,paramIndex: number ) {
    console.log("Target: ",target);
    console.log("method name",methodName );
    console.log("paramIndex",paramIndex);
}
class Course{
    name:string;

    constructor(name:string){
        this.name= name;
    }
    printTeacherNumber(mode:string, @printInfo printAll:boolean){
        if (printAll) {
            console.log(10000);
        } else {
            console.log(100);
        }
    }
}
const course = new Course("Eng");
course.printTeacherNumber("Foo",true);
course.printTeacherNumber("fucc",false);