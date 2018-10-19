//Simple Generic
function echo(data:any){
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 23}));

//better Generic
function Better<T>(data : T){
    return data;
}
console.log(Better("Max").length);
console.log(Better(27));
console.log(Better({name: "Max", age: 23}));