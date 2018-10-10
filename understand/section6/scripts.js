"use strict";
function hello(person) {
    console.log(person.firstname + ' ' + person.age);
}
var person = {
    firstname: "sirawich",
    age: 23,
    none: 23,
    greet: function (name) {
        console.log("Hello ", this.firstname, name);
    }
};
hello(person);
person.greet("Ex");
