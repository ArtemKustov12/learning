const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px">${text}</span>`;
};

const logDiv = logTarget.bind(null, "DIV", "green");
const logP = logTarget.bind(null, "P", "blue");
const logSpan = logTarget.bind(null, "SPAN", "red");

divElem.addEventListener("click", logDiv);
pElem.addEventListener("click", logP);
spanElem.addEventListener("click", logSpan);

// elem.addEventListener("click", (e) => {
//   logTarget(e.target.className, "blue");
// });
