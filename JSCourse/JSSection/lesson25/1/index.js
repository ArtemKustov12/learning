const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const getLinesSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) => `
        <div
            class="sector__seat"
            data-seat-number="${seatNumber}">
        </div>
    `
    )
    .join("");
};

const getSectorLines = () => {
  const seatsString = getLinesSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) => `
        <div
            class="sector__line"
            data-line-number="${lineNumber}">
            ${seatsString}
        </div>
    `
    )
    .join("");
};

const arenaElement = document.querySelector(".arena");

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) => `
        <div class="sector" data-sector-number="${sectorNumber}">
        ${linesString}
        </div>
        `
    )
    .join("");

  arenaElement.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains("sector__seat");
  if (!isSeat) {
    return;
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest(".sector__line").dataset.lineNumber;
  const sectorNumber = event.target.closest(".sector").dataset.sectorNumber;

  const selectedSeatElement = document.querySelector(".board__selected-seat");

  selectedSeatElement.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElement.addEventListener("click", onSeatSelect);

renderArena();
