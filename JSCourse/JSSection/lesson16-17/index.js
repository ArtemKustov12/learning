// // send message

// let message = "Hello!";

// function sendMessage(name) {
//   const sender = "John";
//   console.log(`${name}, ${message}. You ${sender}`);
// }

// function setMessage(newMessage) {
//   message = newMessage;
// }

// sendMessage("Tom");

// setMessage("Goodbye!");

// sendMessage("Tom");

// ---------------------------- //

// // messanger

// function sendMessage(name) {
//   const sender = "John";
//   console.log(`${name}, ${message}. You ${sender}`);
// }

// function setMessage(newMessage) {
//   message = newMessage;
// }

// const createMessenger = () => {
//   return {
//     sendMessage,
//     setMessage,
//   };
// };

// const messenger = createMessenger();

// messenger.setMessage("Goodbye!");
// messenger.sendMessage("Tom");

// ---------------------------- //

// counter

function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
counter2();

console.log(counter1());
console.log(counter2());
