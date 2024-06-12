import { getSquaredNumbers, getOddNumbers, getSum } from "./calc.js";

it("should get squared numbers", () => {
  const result = getSquaredNumbers([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it("shoulr get odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it("should get sum", () => {
  const result = 12;
  const sum = getSum(8, 4);
  console.log(sum);

  expect(result).toEqual(sum);
});
