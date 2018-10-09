class Person {
    name: string;
    username:string;
    private type:string; //only access obj you create 
    protected age:number = 23;  //access any class extenn Person class

    constructor(name:string, username:string){ //argrument of Person
        this.name =name;
        this.username = username;
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
class Ex extends Person{ //ไม่ inheritance private ของ class แม่
   // name = 'xx';
   //age=20;
    constructor(name:string,username:string){ 
        super("jo",name); //ส่งไปยัง constructure ของ class แม่
     //   super("",username);
        // super("xx",username);
      //  this.age = 10;
        // console.log(this.type) Error
    }
}

const exs = new Ex("adn","ss");//อิงจาก constructor ตัว Person
console.log(exs);

//Getter & Setter
class Plant{
    private _species:string = "Default";
    get species(){
        return this._species;
    }
    set species(value:string){
        if(value.length > 3 ){
            this._species = value;
        } else{
            this._species = "Default";
        }
    }
}
let plant = new Plant();
//Getter
console.log(plant.species);
//Setter
plant.species = "PinkPlant";
console.log(plant.species);

// Static Properties & Method ใช้ในHelper class สะดวก
class Helpers{
    static PI:number= 3.14;
    static circleferrence(diamter: number):number{
        return this.PI * diamter;
    }
}
console.log(2* Helpers.PI);
console.log(Helpers.circleferrence(4));


//Abstract class
abstract class Project{
    projectName:string = "Default";
    budget:number = 200;
    //ไม่ต้องรีเทิร์น จะเตือนให้ใส่ฟังค์ชั่นนี้เลยเวลา class อื่น implement abstract class เข้าไป
    abstract changeName(name:string):void;

    calcBudget(){
        return this.budget *3;
    }
}
class ItProject extends Project{
    changeName(name:string):void{
        this.projectName = name;
        this.budget = 300;
    }
}
let newProject = new ItProject();
console.log(newProject);
newProject.changeName("Miew Miew Project");
console.log(newProject);


//Private Constructor;

class OnlyOne{
    private static instance: OnlyOne;
    public readonly name: string; // readonly properties ทำให้ ตัวแปรนั้นอ่านได้อย่างเดียวไม่สามารถเขียนได้ 
    private constructor(name:string){
        this.name = name;
    }

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('Hellow');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('sdas');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'xx'; //error this line
console.log(right.name);

