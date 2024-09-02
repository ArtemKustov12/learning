// async calculator

const calculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("initial value:", num);
      resolve(num);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const squaredValue = value * value;
            console.log("squared value:", squaredValue);
            resolve(squaredValue);
          }, 500);
        })
    )
    .then((squaredValue) => {
      const doubledValue = squaredValue * 2;
      console.log("doubled value:", doubledValue);
    });

calculator(5);

const calculator2 = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("initial value:", num);
      resolve(num);
      return num;
    }, 500);
  })
    .then((value) => {
      const squaredValue = value * value;
      console.log("squared value:", squaredValue);
      return squaredValue;
    })
    .then((squaredValue) => {
      const doubledValue = squaredValue * 2;
      console.log("doubled value:", doubledValue);
    });

calculator2(5);
