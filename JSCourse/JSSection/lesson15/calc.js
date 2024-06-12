const getSquaredNumbers = (array) => array.map((num) => num * num);

const getOddNumbers = (array) => array.filter((num) => num % 2 === 1);

const getSum = (a, b) => Number(a) + Number(b);

export { getSquaredNumbers, getOddNumbers, getSum };
