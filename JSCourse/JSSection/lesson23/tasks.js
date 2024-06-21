const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  const listElement = document.querySelector(".list");

  const listListItemElems = listItems.map((itemText) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    listItemElem.append(listElement);

    return listItemElem;
  });

  listElement.append(...listListItemElems);
};

renderListItems(tasks);
