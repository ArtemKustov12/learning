// metods

const user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log(`Hello I am ${this.name}`);
};

user.sayHi();

// ------------------------------ //

// callbackPrompt

const callbackPrompt = {
  message: "Tell me your number",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(3000);

function defer(func, ms) {
  return function (...args) {
    setTimeout(() => func(...args), ms);
  };
}

const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const deferredHi = defer(user.sayHi.bind(user), 2000);
deferredHi();
