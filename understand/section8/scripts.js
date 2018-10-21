"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decoraor
function test(counstructorFn) {
    console.log(counstructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log("miew");
    }
    Person = __decorate([
        test
    ], Person);
    return Person;
}());
//Factory Decorator
function logging(value) {
    return value ? test : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true) //show constructor
    ], Car);
    return Car;
}());
//advance
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Grenn Plant";
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
//Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true) //un editaable = false
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false) //Method Decorator
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Exy");
project.calcBudget();
// project.calcBudget = function(){
//     console.log(2000);
// }
project.calcBudget();
console.log(project.projectName);
