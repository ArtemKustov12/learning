// sorting array
const sortArray = (numbers) => {
  return numbers.sort((a, b) => a - b);
};

const array = [1, 25, 3, 2, 5, 4];
console.log(sortArray(array));

function test(number, nameIndex) {
  return number + nameIndex;
}

// calculator
const calc = (expression) => {
  const a = expression.split(" ");
  let result = 0;

  switch (a[1]) {
    case "+":
      result = Number(a[0]) + Number(a[2]);
      break;
    case "-":
      result = Number(a[0]) - Number(a[2]);
      break;
    case "*":
      result = Number(a[0]) * Number(a[2]);
      break;
    case "/":
      result = Number(a[0]) / Number(a[2]);
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc("6 - 9"));
