// requestUsrData

const requestUsrData = async (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 1000);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          email: `${userId}`,
          userId,
        });
      }, 1000);
    }
  });

  return request;
};

requestUsrData("user-23")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
