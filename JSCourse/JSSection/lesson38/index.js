async function func() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(17);
    }, 3000);
  });
  const result = await promise;
  console.log(result);
  return 1;
}

const result = func();
console.log("hi");

// ---------------------------- //

const getUser = async (userId) => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to fetch user");
};

getUser("facebook")
  .then((result) => console.log(result))
  .catch((error) => alert(error.message));
