// asyncSum(asyncNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay("10", 3000);

const asyncSum = (...asyncNumbers) => {
  Promise.all(asyncNumbers)
    .then((numbers) => {
      console.log(
        numbers
          .filter((value) => !isNaN(value))
          .reduce((acc, num) => acc + Number(num), 0)
      );
    })
    .catch(() => console.log("Can't calculate"));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3);
