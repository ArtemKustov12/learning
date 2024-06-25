const renderArena = () => {
  [1, 2, 3].map(
    (sectorNumber) => `
    <div
        class="sector"
        data-sector-number="${sectorNumber}">
        </div>
    `
  );
};
