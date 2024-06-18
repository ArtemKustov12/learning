// vechile and ship

const vechile = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: "Argo",
  hasWheels: false,
  liftAnchorDown() {
    console.log("lifting anchor down");
  },
  liftAnchorUp() {
    console.log("lifting anchor up");
  },
  ...vechile,
};

ship.move();
vechile.move(); // name is undefined

// function prototype
function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
}

const user1 = new User("Tom", 18);
const user2 = new User("Bob", 19);

user1.sayHi();
user2.sayHi();
console.log(user1.sayHi === user2.sayHi); // true
