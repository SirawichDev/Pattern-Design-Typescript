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
        this.username = username;
        this.age = 23; //access any class extenn Person class
        this.name = name;
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
    function Ex(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 10;
        return _this;
        // console.log(this.type) Error
    }
    return Ex;
}(Person));
var exs = new Ex("adn"); //อิงจาก constructor ตัว Person
console.log(exs);
