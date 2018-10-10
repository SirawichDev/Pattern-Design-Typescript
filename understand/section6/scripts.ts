interface NamePerson {
    firstname: string;
}
function hello(person:NamePerson){
    console.log(person.firstname);
}
const person = {
    firstname:"sd",
    age:20
};
hello(person);
