// // metods

// const user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log(`Hello I am ${this.name}`);
// };

// user.sayHi();

// ------------------------------ //

// // callbackPrompt

// const callbackPrompt = {
//   message: "Tell me your number",
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// callbackPrompt.showDeferredPrompt(3000);

// function defer(func, ms) {
//   return function (...args) {
//     setTimeout(() => func(...args), ms);
//   };
// }

// const user = {
//   name: "Tom",
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   },
// };

// const deferredHi = defer(user.sayHi.bind(user), 2000);
// deferredHi();

// ------------------------------ //

// event this in arrow function

const obj = {
  name: "Tom",
  sayHi() {
    console.log(this.name);
  },
};

setTimeout(obj.sayHi(), 1000);

const party = {
  guests: [
    { name: "John", age: 18, email: "j@sd.com" },
    { name: "Tom", age: 15, email: "t@sv.com" },
  ],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email,
      }));
  },
};

console.log(party.getInvitations());

// wallet

const wallet = {
  transactions: [1, 5, 89, 337, 3],
  gtMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.gtMax());
console.log(wallet.getMin());
