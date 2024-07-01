// get local storage data

localStorage.clear();
localStorage.setItem("hobbies", ["swimming", "reading", "coding"]);
localStorage.setItem("student", JSON.stringify({ name: "Ahmed", age: 77 }));
localStorage.setItem("teacher", JSON.stringify({ name: "Ali", age: 33 }));

// console.log(JSON.parse(localStorage.getItem("student")));

const getLocalStorageData = () => {
  return Object.entries(localStorage).map(([key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return [key, newValue];
  });
};

console.log(getLocalStorageData());
