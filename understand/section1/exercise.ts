let bankAccounts = {
    money:2000,
    deposit(value){
        this.money += value;
    }
};
let myself ={
    name: "Ex",
    bankAccount: bankAccount,
    hobbies: ["sport","cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);