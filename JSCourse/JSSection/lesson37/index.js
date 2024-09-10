window.addEventListener("error", function onUnhandledError(err) {
  console.error("Uncaught Error: ", err.message);
});

const jsonString = '{"name": "Ahmed", "age": 34, "city": "Cairo"}';

try {
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch (error) {
  console.log("We can't parse the JSON string");
} finally {
  console.log("I'm a finally block");
}

console.log("I'm a global scope");

// promise errors
const successPromise = Promise.resolve({ name: "Tom" });

successPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

const failedRequest = Promise.reject(new Error("Fail"));

failedRequest
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
    throw error;
    // return Promise.reject(error);
  })
  .then((data) => console.log(data));

window.addEventListener(
  "unhandledrejection",
  function onUnhandledRejection(err) {
    console.error("error", err.reason);
  }
);

// errors from server
fetch("https://api.github.com/user/github")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return Promise.reject(new Error("Failed to load data"));
  })
  .then((data) => {
    console.log(data);
  });
