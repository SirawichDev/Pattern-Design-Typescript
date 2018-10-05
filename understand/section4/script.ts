class Person {
    name: string;
    private type:string; //only access obj you create
    protected age:number = 23;  //access any class extenn Person class

    constructor(name:string,public username:string){ //argrument of Person
        this.name =name;
    }
    //Method
    printAge(){
        console.log(this.age);
        this.setType("foo");
    }
    private setType(type:string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Ex","Ex007");
console.log(person.name,person.username);
person.printAge();
// person.setType("sds"); won't work with private method


//Inheritance
class Ex extends Person{
   // name = 'xx';
    constructor(username:string){ 
        super("Max",username); //ส่งไปยัง constructure ของ class แม่
    }
}

const exs = new Ex("adn");//อิงจาก constructor ตัว Person
console.log(exs);
