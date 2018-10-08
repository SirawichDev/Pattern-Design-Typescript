var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.age = 23; //access any class extenn Person class
        this.name = name;
        this.username = username;
    }
    //Method
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("foo");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Ex", "Ex007");
console.log(person.name, person.username);
person.printAge();
// person.setType("sds"); won't work with private method
//Inheritance
var Ex = /** @class */ (function (_super) {
    __extends(Ex, _super);
    // name = 'xx';
    //age=20;
    function Ex(name, username) {
        return _super.call(this, "jo", name) || this;
        //   super("",username);
        // super("xx",username);
        //  this.age = 10;
        // console.log(this.type) Error
    }
    return Ex;
}(Person));
var exs = new Ex("adn", "ss"); //อิงจาก constructor ตัว Person
console.log(exs);
//Getter & Setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
//Getter
console.log(plant.species);
//Setter
plant.species = "PinkPlant";
console.log(plant.species);
// Static Properties & Method ใช้ในHelper class สะดวก
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circleferrence = function (diamter) {
        return this.PI * diamter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.circleferrence(4));
//Abstrct class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 200;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 3;
    };
    return Project;
}());
var ItProject = /** @class */ (function (_super) {
    __extends(ItProject, _super);
    function ItProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItProject.prototype.changeName = function (name) {
        this.projectName = name;
        this.budget = 300;
    };
    return ItProject;
}(Project));
var newProject = new ItProject();
console.log(newProject);
newProject.changeName("Miew Miew Project");
console.log(newProject);
