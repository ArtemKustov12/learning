class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User("Tom", 25);
console.log(user1.setAge(26));

class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }
  deposit(value) {
    this.balance += value;
  }
  withdraw(value) {
    if (value > this.balance) {
      console.log("No enough funds");
      return;
    }
    this.balance -= value;
  }
}

const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(100);
console.log(wallet1.getBalance());
wallet1.withdraw(50);
console.log(wallet1.getBalance());
wallet1.withdraw(70);
