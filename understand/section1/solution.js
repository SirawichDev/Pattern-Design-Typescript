var bankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var mySelf = {
    name: "Ex",
    bankAccount: bankAccount,
    hobbies: ["sport", "cooking"]
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
