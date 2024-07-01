const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInfuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInfuture).getDay()];
};

const result = getDayOfWeek(new Date(2024, 0, 1), 15);

console.log(result);
