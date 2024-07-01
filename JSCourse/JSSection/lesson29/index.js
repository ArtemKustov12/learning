// chaning

const calc = (initialValie) => {
  let result = initialValie;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    substract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).substract(5).result();

console.log(result);

// recursion
const favorites = ["id-6", "id-17"];

const tree = {
  id: "id-1",
  name: "products",
  nodes: [
    {
      id: "id-2",
      name: "clothes",
      nodes: [
        {
          id: "id-6",
          name: "shirts",
          nodes: [],
        },
        {
          id: "id-7",
          name: "pants",
          nodes: [],
        },
      ],
    },
    {
      id: "id-3",
      name: "electronics",
      nodes: [
        {
          id: "id-17",
          name: "phones",
          nodes: [],
        },
        {
          id: "id-8",
          name: "laptops",
          nodes: [],
        },
      ],
    },
  ],
};

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));

// compose

const add3 = (value) => value + 3;
const mult2 = (value) => value * 2;
const div4 = (value) => value / 4;

const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverything = compose(add3, mult2, div4);

console.log(doEverything(3));
