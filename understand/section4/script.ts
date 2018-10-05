class Person {
    name: string;
    private type:string; //only access obj you create
    protected number:number;  //access any class extenn Person class

    constructor(name:string,public username:string){ //argrument of Person
        this.name =name;
    }
}

const person = new Person("Ex","Ex007");
console.log(person.name,person.username);