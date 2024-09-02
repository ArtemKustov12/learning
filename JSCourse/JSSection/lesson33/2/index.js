const servers = [
  "https://server.com/us",
  "https://server.com/eu",
  "https://server.com/au",
];

const getRandomNmber = (from, to) => {
  return from + Math.random() * (to - from);
};

const randomDelay = getRandomNmber(1000, 3000);

const request = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userData: {
          name: "Tom",
          age: 17,
        },
        source: url,
      });
    });
  }, randomDelay);

const getUserAsap = (userId) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);
  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};

getUserAsap("user-id-1").then((result) => console.log(result));
