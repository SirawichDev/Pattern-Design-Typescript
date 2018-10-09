//Ex1
class Car{
    name:string;
    acceleration:number = 0;
    constructor(name:string){
        this.name = name;
    }
    hook():void{
        console.log("TOOOooot!");
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration+speed;
    }
}
let car = new Car("BMW");
car.hook();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

//Ex2
class BaseObject{
    width=0;
    length=0;
}

class Rectangle extends BaseObject{
    calcSize():number{
        return this.width * this.length;
    }
}
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length =2;
console.log(rectangle.calcSize());

//Ex3
class Persons{
    private _firstname:string = "";
    get firstname():string{
        return this._firstname;
    }
    set firstname(value:string){
        if(value.length > 3){
            this._firstname = value;
        } else {
            this._firstname = "";
        }
    }
    enumerable  = true;
    configurable = true;
}
let persons = new Persons();
console.log(persons.firstname);
persons.firstname = "sadss";
console.log(persons.firstname);
persons.firstname = "x";
console.log(persons.firstname)