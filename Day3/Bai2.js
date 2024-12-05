// Bài Tập 2: Hệ thống ngân hàng
// - Tạo lớp BankAccount với các thuộc tính accountNumber, balance.
// - Tạo các phương thức deposit(amount) và withdraw(amount) để cập nhật số dư.
// - Tạo lớp SavingAccount kế thừa BankAccount, thêm thuộc tính interestRate và phương thức calculateInterest().
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        return this.balance + (this.interestRate / 100) * this.balance;
    };
    return SavingAccount;
}(BankAccount));
var bankAccount = new BankAccount(1, 500);
bankAccount.deposit(100);
bankAccount.withdraw(200);
console.log(bankAccount.getBalance()); // 500 + 100 - 200
var saveAccount = new SavingAccount(1, 20000000, 10);
console.log(saveAccount.calculateInterest()); // 20000000 + 10% x 20000000
