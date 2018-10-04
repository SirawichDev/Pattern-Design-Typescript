
type Accountx = { money:number, deposit:(value:number) => number}
let bankAccount: Accountx = {
    money:2000,
    deposit: function(value:number):number{
        return this.money += value;
    }
}
let mySelf: {name:string,bankAccount:Accountx,hobbies:string[]} = {
    name: "Ex",
    bankAccount:bankAccount,
    hobbies: ["sport","cooking"]
}

mySelf.bankAccount.deposit(3000);
console.log(mySelf);