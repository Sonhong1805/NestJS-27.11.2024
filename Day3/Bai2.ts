// Bài Tập 2: Hệ thống ngân hàng
// - Tạo lớp BankAccount với các thuộc tính accountNumber, balance.
// - Tạo các phương thức deposit(amount) và withdraw(amount) để cập nhật số dư.
// - Tạo lớp SavingAccount kế thừa BankAccount, thêm thuộc tính interestRate và phương thức calculateInterest().

class BankAccount {
  protected accountNumber: number;
  protected balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingAccount extends BankAccount {
  private interestRate: number;

  constructor(accountNumber: number, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    return this.balance + (this.interestRate / 100) * this.balance;
  }
}

const bankAccount = new BankAccount(1, 500);
bankAccount.deposit(100);
bankAccount.withdraw(200);
console.log(bankAccount.getBalance()); // 500 + 100 - 200

const saveAccount = new SavingAccount(1, 20000000, 10);
console.log(saveAccount.calculateInterest()); // 20000000 + 10% x 20000000
