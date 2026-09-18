class BankAccount {
    static totalAccounts = 0;

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;

        BankAccount.totalAccounts++;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(this.holderName + " deposited ₹" + amount);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal failed! Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(this.holderName + " withdrew ₹" + amount);
        }
    }

    displayBalance() {
        console.log("Account No: " + this.accountNo);
        console.log("Holder Name: " + this.holderName);
        console.log("Balance: ₹" + this.balance);
        console.log("----------------------");
    }

    static displayTotalAccounts() {
        console.log("Total Bank Accounts: " + BankAccount.totalAccounts);
    }
}

let acc1 = new BankAccount(101, "Sakshi", 10000);
let acc2 = new BankAccount(102, "Aman", 5000);
acc1.deposit(2000);
acc1.withdraw(3000);
acc1.displayBalance();
acc2.deposit(1000);
acc2.withdraw(7000); 
acc2.displayBalance();

BankAccount.displayTotalAccounts();